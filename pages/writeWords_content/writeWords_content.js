// pages/writeWords_content/writeWords_content.js
var postData = require("../../data/post_data.js");
Page({
	data: {
		index:0,
		rate_word:'0%',
		words_thisBook: postData.local_wordList_selections,
		message: '',
		error_msg:''
	},
	onLoad(){
		// var model = decodeURIComponent(options.wordsList);
		// var wordsList = JSON.parse(model);
		// console.log(wordsList);
		
		console.log(wordsList);
		this.setData({
			rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
		});
	},
	onClickIcon() {
		wx.showToast({
		  icon: 'none',
		  title: '点击图标'
		});
	  },
	nextWord() {
		var that = this;
		if (that.data.index < postData.local_wordList_selections.length - 1) {
			this.setData({
				index: that.data.index + 1,
			});
			this.setData({
				rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
			});
		}
		else{
			setTimeout(function(){
				wx.reLaunch({
				url: './../writeWords/writeWords',
				})
				// that.setData({
				// 	isSelected:1
			   	// })  
			}, 2000);
			wx.showToast({
				title: '本轮学习结束啦',
				icon: 'none',
				duration: 2000
			})
			
		}
	}
})

