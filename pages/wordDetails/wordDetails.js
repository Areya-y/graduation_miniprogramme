// pages/wordDetails/wordDetails.js
Page({
	data: {
		word:{}
	},
	onLoad: function(options) {
		var that=this
		//将字符串转成json
		let word = JSON.parse(options.word);
		console.log(word);
		that.setData({
			word:word
		});
	  },
	addCollect(){
		if (this.data.word.isCollect==0) {
			this.setData({
				// word.isCollect:1
			});
			wx.showToast({
				title: '收藏成功',
				icon: 'none',
				duration: 2000
			})
		} else {
			this.setData({
				isCollect:0
			});
			wx.showToast({
				title: '取消收藏',
				icon: 'none',
				duration: 2000
			})
		}
	}
})