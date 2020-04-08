// pages/studyWord_content/studyWord_content.js
var postData = require("../../data/post_data.js");
Page({
	data: {
		strangeGrade_num:15,
		knowGrade_num:20,
		familiarGrade_num:15,
		words_thisBook: postData.local_wordList_selections,
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
	nextWord() {
		var that = this;
		if (that.data.index < postData.local_wordList_selections.length - 1) {
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
			setTimeout(function(){
				wx.reLaunch({
				url: './../studyWord/studyWord',
				})}, 2000);
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
		var rightAnswer = postData.local_wordList_selections[that.data.index].answer;
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
			var word_change="words_thisBook["+that.data.index+"].isCollect";
			console.log(word_change);
			if (that.data.words_thisBook[that.data.index].isCollect==0) {
				this.setData({
				  [word_change]:1
				});
				wx.showToast({
					title: '加入生词本',
					icon: 'none',
					duration: 2000
				})
			} else {
				wx.showToast({
					title: '又错了',
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