// pages/user/user.js
Page({
	data: {
		userInfo:{},
		remindTime: "09:00",
		array_wordsBook:['英语一','英语二'],
		user_wordsBook:1,
		user_wordNum:50
	},
	onShow() {
		const userInfo=wx.getStorageSync("userInfo");
		this.setData({userInfo});
	},
	bindTimeChange: function (e) {
		this.setData({
			remindTime: e.detail.value
		})
	  },
	handleSelectWordsBook(e){
		console.log(e.detail.value);
		this.setData({
			user_wordsBook: e.detail.value
		})
	},
	
	handleSetWordNum(e){
		const wordNum=parseInt(e.detail.value)
		if (wordNum<=150&&wordNum>=30) {
		console.log("true:"+e.detail.value)
		this.setData({
			user_wordNum: e.detail.value
		})
		} else {
			wx.showToast({
				title: '请输入30-150内的数字',
				icon: 'none',
				duration: 3000
			});
		}
	},
	handleExit(e){
		wx.clearStorage()
	},
	onShareAppMessage: function(){
		return {
		   title: '考研英语冲鸭',
		   path: '/pages/index/index',
		   imageUrl: 'https://s2.ax1x.com/2020/03/10/8PiIl8.jpg' 
	   }
   }
})