//Page Object
Page({
	data: {
	},
	handleGetUserInfo(e){
		console.log(e.detail.errMsg)
		console.log(e.detail.userInfo)
		console.log(e.detail.rawData)
		wx.login({
			success: function (res) {
				console.log(res);
				//获取登录的临时凭证
				var code=res.code;
				const {userInfo}=e.detail;
				var nickName=userInfo.nickName
				console.log(nickName);
				
				//调用后端，获取微信的session_key,secret
				wx.request({
					// url:"http://127.0.0.1:8080/xmut/wxLogin?code="+code,
					url:"http://127.0.0.1:8080/xmut/wxLogin",
					method: 'POST',
					data: {
						'code': code,
						'nickName':nickName
					  },
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function (result) {
						console.log(e.detail.errMsg)
						
						wx.setStorageSync("userInfo",userInfo);
						// wx.navigateBack({
						// 	delta:1
						// });
					}
				});
			}
		});
	}
});
  