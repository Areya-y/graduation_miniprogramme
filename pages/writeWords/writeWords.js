// pages/writeWords/writeWords.js
Page({
  data: {
	strangeWordsList:[],
	knowWordsList:[],
	familiarWordsList:[],
	wordsList:[]
  },
  onLoad(e){
		var that=this;
		var model = decodeURIComponent(e.wordsList);
		var wordsList = JSON.parse(model);
		console.log(wordsList);
		// var wordsList=this.data.wordsList
		wx.request({
			url: "http://localhost:8080/xmut/writeWordController/convertwordlist",
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
					wordsList:wordsList,
				})
			}
		  })
  },
  jumpToWriteWordContent(e){
		let wordsList=JSON.stringify(this.data.wordsList);
		wx.navigateTo({
			url:`/pages/writeWords_content/writeWords_content?wordsList=${encodeURIComponent(wordsList)}`,
			success: function(res){
			// success
			},
		})
	}
})