// pages/wordBook/wordBook.js
//Page Object
Page({
	data: {
		wordBookName:"单词书",
		wordsList:[]
	},
	// options(Object)
	onLoad: function(options){
		var wordBookName=options.wordBookName;
		console.log(wordBookName);
		// 先将字符串转化为数组
		var model = decodeURIComponent(options.wordsList);
		var wordsList = JSON.parse(model)
		console.log(wordsList);
		this.setData({
			wordsList:wordsList,
			wordBookName:wordBookName,
		});
	},
	jumpToWordDetails:function(e){
		var word=e.currentTarget.dataset.word;
		console.log(word);
        let wordStr=JSON.stringify(word);
		wx.navigateTo({
			url:"/pages/wordDetails/wordDetails?word="+wordStr,
			success: function(res){
			// success
			},
		})
	},
	jumpTostudyWord(e){
        let wordsList=JSON.stringify(this.data.wordsList);
		wx.redirectTo({
			url:`/pages/studyWord/studyWord?wordsList=${encodeURIComponent(wordsList)}`,
			success: function(res){
			// success
			},
		})
	},
	jumpTowordCards(e){
		let wordsList=JSON.stringify(this.data.wordsList);
		wx.redirectTo({
			url:`/pages/wordCards/wordCards?wordsList=${encodeURIComponent(wordsList)}`,
			success: function(res){
			// success
			},
		})
	},
	jumpTowriteWords(e){
		let wordsList=JSON.stringify(this.data.wordsList);
		wx.redirectTo({
			url:`/pages/writeWords/writeWords?wordsList=${encodeURIComponent(wordsList)}`,
			success: function(res){
			// success
			},
		})
	}
});
