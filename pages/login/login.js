//Page Object
Page({
	data: {
		userID:0
	},
	handleGetUserInfo(e){
		var that=this
		
		console.log(e.detail.errMsg);
		console.log(e.detail.userInfo);
		console.log(e.detail.rawData);
		if (e.detail.userInfo){
			//用户按了允许授权按钮
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
						url:"http://127.0.0.1:8080/xmut/wxLogin",
						method: 'POST',
						data: {
							'code': code,
							'nickName':nickName
						  },
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: function (res) {
							console.log(res.data);
							
							var userID=res.data.userID.userId
							console.log(userID);
							if (userID==null) {
								var toastText='获取用户ID失败'+res.data.errMsg;
								wx.showToast({
									title: toastText,
									icon: 'none',
									duration: 2000,
								});
							}	else{
								that.setData({
									userID:userID
								});
								setTimeout(function(){
									console.log("登录成功");
									wx.showToast({
									title: '登录成功',
									icon: 'none',
									duration: 2000
								})
								}, 2000);
								console.log(userID);
							
								wx.setStorageSync("userInfo",userInfo);
								wx.setStorageSync("userID",userID);
								wx.navigateBack({
									delta:1
								});
								
							}
							
						}
					});
				}
			});
		  } else {
			//用户按了拒绝按钮
			wx.showToast({
				title: "必须授权登录之后才能继续操作",
				icon: 'none',
				duration: 2000,
			});
		  }
		
	}
});
  