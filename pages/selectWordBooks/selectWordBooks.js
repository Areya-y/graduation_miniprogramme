Page({
	data: {
	  worsNumPer:50,
	  TabCur: 0,
	  scrollLeft:0,
	  wordBook_categorys:[
		{
			id:0,
			name:"highFrequencyWords",
			value:"高频词汇"
		},
		{
			id:1,
			name:"importantWords",
			value:"中频词汇"
		},
		{
			id:2,
			name:"basicWords",
			value:"低频词汇"
		}
	  ],
	  unfinished_wordBook:[],
	  finished_wordBook:[]
	},
	onLoad(){
		const worsNumPer=wx.getStorageSync("user_wordNum");
		this.setData({
			worsNumPer:worsNumPer,
		})
		const userID=wx.getStorageSync("userID");
		wx.request({
			url: 'http://localhost:8080/xmut/wordDetalisController/getWordsPerBook',
			data: {
				"degree":this.data.TabCur,
				"userID":userID,
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			method: 'POST',
			success: (result)=>{
				console.log(result.data);
				
				this.setData({
					unfinished_wordBook: result.data.unfinished_wordBook,
					finished_wordBook: result.data.finished_wordBook
				})
				
			}
		});
	},
	tabSelect(e) {
		var that=this;
		const userID=wx.getStorageSync("userID");
		// console.log(e.currentTarget.dataset.id),
		that.setData({
			TabCur: e.currentTarget.dataset.id,
			scrollLeft: (e.currentTarget.dataset.id-1)*60
		})
		wx.request({
			url: 'http://localhost:8080/xmut/wordDetalisController/getWordsPerBook',
			data: {
				"degree":e.currentTarget.dataset.id,
				"userID":userID,
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			method: 'POST',
			success: (result)=>{
				console.log(result.data);
				
				that.setData({
					unfinished_wordBook: result.data.unfinished_wordBook,
					finished_wordBook: result.data.finished_wordBook
				})
				
			}
		});

	},
	toWordBook(e){
		var wordBookName=e.currentTarget.dataset.wordbookname;
		console.log(wordBookName);
		
		var wordsList=e.currentTarget.dataset.wordslist;
		console.log(wordsList);
		var model = JSON.stringify(wordsList);
		
		wx.navigateTo({
			url:`/pages/wordBook/wordBook?wordsList=${encodeURIComponent(model)}&&wordBookName=${wordBookName}`,
			success: function(res){
			  // success
			},
		  })
	}
  })