// pages/user/user.js
Page({
	data: {
		userInfo:{},
		remindTime: "09:00",
		array_wordsBook:['英语一','英语二'],
		user_wordsBook:1,
		user_wordNum:50,
		userID:0
	},
	onShow:function(){
		var that=this;
		const userInfo=wx.getStorageSync("userInfo");
		that.setData({userInfo});
		const userID=wx.getStorageSync("userID");
		that.setData({userID});

		wx.request({
			url:"http://127.0.0.1:8080/xmut/queryusersetting",
			method: 'POST',
			data: {
				'userID': this.data.userID,
			  },
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: function (res) {
				console.log(res);
				that.setData({
					remindTime:res.data.remind_time,
					user_wordsBook:res.data.wordBook,
					user_wordNum:res.data.wordsNumPer
				});
			}
		});
	},
	bindTimeChange: function (e) {
		var that=this

		that.setData({
			remindTime: e.detail.value
		})
		wx.request({
			url:"http://127.0.0.1:8080/xmut/modifyusersetting",
			method: 'POST',
			data: {
				'userID': this.data.userID,
				'remindTime':this.data.remindTime,
				'user_wordsBook':this.data.user_wordsBook,
				'user_wordNum':this.data.user_wordNum,
			  },
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: function (res) {
				console.log(res.data);
			}
		});
	  },
	handleSelectWordsBook(e){
		var that=this
		console.log(e.detail.value);
		that.setData({
			user_wordsBook: e.detail.value
		})
		wx.request({
			url:"http://127.0.0.1:8080/xmut/modifyusersetting",
			method: 'POST',
			data: {
				'userID': this.data.userID,
				'remindTime':this.data.remindTime,
				'user_wordsBook':this.data.user_wordsBook,
				'user_wordNum':this.data.user_wordNum,
			  },
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: function (res) {
				console.log(res.data);
			}
		});
	},
	
	handleSetWordNum(e){
		var that=this
		const wordNum=parseInt(e.detail.value)
		if (wordNum<=150&&wordNum>=30) {
			console.log("true:"+e.detail.value)
			that.setData({
				user_wordNum: e.detail.value
			})
			wx.request({
				url:"http://127.0.0.1:8080/xmut/modifyusersetting",
				method: 'POST',
				data: {
					'userID': this.data.userID,
					'remindTime':this.data.remindTime,
					'user_wordsBook':this.data.user_wordsBook,
					'user_wordNum':this.data.user_wordNum,
				  },
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: function (res) {
					console.log(res.data);
				}
			});
		} else {
			wx.showToast({
				title: '请输入30-150内的数字',
				icon: 'none',
				duration: 3000
			});
		}
	},
	// handleExit(e){
	// 	wx.clearStorage()
	// },
	onShareAppMessage: function(){
		return {
		   title: '考研英语冲鸭',
		   path: '/pages/index/index',
		   imageUrl: 'https://s2.ax1x.com/2020/03/10/8PiIl8.jpg' 
	   }
   }
})