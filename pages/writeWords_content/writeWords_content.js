// pages/writeWords_content/writeWords_content.js
Page({
	data: {
		index:0,
		rate_word:'0%',
		wordsList:[],
		message: '',
		error_msg:''
	},
	onLoad(options){
		var model = decodeURIComponent(options.wordsList);
		var wordsList = JSON.parse(model);
		console.log(wordsList);
		this.setData({
			wordsList:wordsList,
			rate_word:(this.data.index+1)/(this.data.wordsList.length) *100+'%'
		});
	},
	nextWord(e) {
		var that = this;
		const userID=wx.getStorageSync("userID");
		var value=that.data.message;
		var index=that.data.index;
		var word=that.data.wordsList[index].word
		console.log(word);
		var word_writeNum="wordsList["+that.data.index+"].writeNum";
		var writeNum=0;
		if (value==word) {
			console.log(word_writeNum);
			if (that.data.wordsList[index].writeNum==null) {
				writeNum=1
			}else
			if (that.data.wordsList[index].writeNum==0) {
				writeNum=1
			} else {
				writeNum=2
			};
			wx.showToast({
				title: '恭喜你！拼写正确',
				icon: 'none',
				duration: 2000
			})
			if (that.data.index < that.data.wordsList.length - 1) {
				that.setData({
					index: that.data.index + 1,
					rate_word:(that.data.index+1)/(that.data.wordsList.length) *100+'%',
					message:'',
					error_msg:'',
					[word_writeNum]:writeNum
				});
			}else{
				let wordsList=JSON.stringify(that.data.wordsList);
				wx.request({
					url:"http://127.0.0.1:8080/xmut/wordLearningController/insertWordBookLearning?userID="+userID,
					data: wordsList,
					method: 'POST',
					header: {
						'contentType': "application/json;charset=utf-8;"
					},
					success:function (res){
						console.log(res);
					}
				});	
				wx.request({
					url: 'http://127.0.0.1:8080/xmut/wordLearningController/usersignin',
					data: {
					  "userID":userID,
					},
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					success: (res)=>{
					  console.log(res);
					}
				  });
				setTimeout(function(){
					wx.reLaunch({
						url:`/pages/writeWords/writeWords?wordsList=${encodeURIComponent(wordsList)}`,
					})
				}, 2000);
				wx.showToast({
					title: '本轮学习结束啦',
					icon: 'none',
					duration: 2000
				});
				that.setData({
					[word_writeNum]:writeNum
				});
			}
			
		} else {
			wx.showToast({
				title:word,
				icon: 'none',
				duration: 2000
			}),
			that.setData({
				error_msg:'请输入拼写正确的单词',
			});
		}
		
	},
	verification(e){
		console.log(e.detail);
		this.setData({
			message:e.detail
		})
		
	}
})

