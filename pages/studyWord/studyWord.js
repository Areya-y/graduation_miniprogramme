// pages/studyWord/studyWord.js
Page({

	data: {
		rate:0,
		TabCur: 0,
		scrollLeft:0,
		strangeWordsList:[],
		knowWordsList:[],
		familiarWordsList:[],
		wordsList:[]
		

	},
	onLoad(e){
		var that=this;
		// var wordsList=this.data.wordsList
		var model = decodeURIComponent(e.wordsList);
		var wordsList = JSON.parse(model);
		console.log(wordsList);
		that.setData({wordsList:wordsList});
		wx.request({
			url: "http://localhost:8080/xmut/studyWordController/convertwordlist",
			data: JSON.stringify(wordsList),
			method: 'POST',
			header: {
				'contentType': "application/json;charset=utf-8;"
			},
			success: function (res) {
				console.log(res);
				that.setData({
					strangeWordsList:res.data.strangeWordsList,
					knowWordsList:res.data.knowWordsList,
					familiarWordsList:res.data.familiarWordsList,
					rate:(res.data.familiarWordsList.length)/(wordsList.length) *100
				})
			}
		  })
	},
	jumpToStudyWordContent(e){
		let wordsList=JSON.stringify(this.data.wordsList);
		wx.redirectTo ({
			url:`/pages/studyWord_content/studyWord_content?wordsList=${encodeURIComponent(wordsList)}`,
			success: function(res){
			// success
			},
		})
	},
	tabSelect(e) {
		this.setData({
		  TabCur: e.currentTarget.dataset.id,
		  scrollLeft: (e.currentTarget.dataset.id-1)*60
		})
	  }
})