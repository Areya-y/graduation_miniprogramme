// pages/studyWord_content/studyWord_content.js
Page({
	data: {
		wordsList:[],
		answersList:[],
		selectionsList:[],
		index:0,
		bc_default: '#FBFBFB',
		bc_right: '#2ab671',
		bc_wrong: '#FF99B4',
		bcA: '',
		bcB: '',
		bcC: '',
		bcD: '',
		isSelected:0
	},
	onLoad(e){
		var that=this;
		// var wordsList=this.data.wordsList
		var model = decodeURIComponent(e.wordsList);
		var wordsList = JSON.parse(model);
		console.log(wordsList);
		that.setData({wordsList:wordsList});

		wx.request({
			url: "http://localhost:8080/xmut/studyWordController/getselections",
			data: JSON.stringify(wordsList),
			method: 'POST',
			header: {
				'contentType': "application/json;charset=utf-8;"
			},
			success: function (res) {
				console.log(res);
				that.setData({
					answersList:res.data.answersList,
					selectionsList:res.data.selectionsList
				})
			}
		  });
	},
	nextWord() {
		const userID=wx.getStorageSync("userID");
		var that = this;
		if (that.data.index <that.data.wordsList.length - 1) {
		  this.setData({
			index: that.data.index + 1,
			bcA: that.data.bc_default,
			bcB: that.data.bc_default,
			bcC: that.data.bc_default,
			bcD: that.data.bc_default,
			isSelected:0
		  });
		}
		else{
			let wordsList=JSON.stringify(this.data.wordsList);
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
			
			
			setTimeout(function(){
				wx.redirectTo({
					url:`/pages/studyWord/studyWord?wordsList=${encodeURIComponent(wordsList)}`,
					success: function(res){
					// success
					},
				})
			}, 2000);
			wx.showToast({
				title: '本轮学习结束啦',
				icon: 'none',
				duration: 2000
			})
			
		}
	},
	
	btnOpClick: function(e){
		var that = this;
		var selectID = e.currentTarget.id;
		var rightAnswer =that.data.answersList[that.data.index];
		if (selectID==rightAnswer){
			if (selectID == 'A') {
				this.setData({ bcA: that.data.bc_right });
			}
			else if (selectID == 'B') {
				this.setData({ bcB: that.data.bc_right });
			}
			else if (selectID == 'C') {
				this.setData({ bcC: that.data.bc_right });
			}
			else if (selectID == 'D') {
				this.setData({ bcD: that.data.bc_right });
			}
			var studyNum_str="wordsList["+that.data.index+"].studyNum";
			console.log(studyNum_str);
			var studyNum=0;
			if (that.data.wordsList[that.data.index].studyNum==null) {
				studyNum=1
			}else if (that.data.wordsList[that.data.index].studyNum==0) {
				studyNum=1
			} else {
				studyNum=2
			} 
			this.setData({
				[studyNum_str]:studyNum
			  });
			wx.showToast({
				title: '答对了',
				duration: 1000
				})
		}
		else {
			if (selectID == 'A') {
			this.setData({ bcA: that.data.bc_wrong });
			}
			else if (selectID == 'B') {
			this.setData({ bcB: that.data.bc_wrong });
			}
			else if (selectID == 'C') {
			this.setData({ bcC: that.data.bc_wrong });
			}
			else if (selectID == 'D') {
			this.setData({ bcD: that.data.bc_wrong });
			}
			wx.showToast({
				title: '答错了',
				icon: 'none',
				duration: 1000
			});
			var word_change="wordsList["+that.data.index+"].isCollect";
			console.log(word_change);
			if (that.data.wordsList[that.data.index].isCollect==1) {
				wx.showToast({
					title: '又错了',
					icon: 'none',
					duration: 2000
				})
				
			} else {
				this.setData({
					[word_change]:0
				  });
				  wx.showToast({
					  title: '加入生词本',
					  icon: 'none',
					  duration: 2000
				  })
			}
			
		};
		setTimeout(function(){
		   that.setData({
				isSelected:1
		   })        
		}, 2000);
	}
})