// pages/selfStudyRoom_index/selfStudyRoom_index.js
Page({
	data: {
		userInfoList:[]
	  },
	onShow(){
		var that=this;
		wx.request({
			url:"http://127.0.0.1:8080/xmut/wordLearningController/getrankinglistdata",
			method: 'GET',
			success: function (res) {
				console.log(res);
				that.setData({
					userInfoList:res.data.success
				});
			}
		});
	}
})
