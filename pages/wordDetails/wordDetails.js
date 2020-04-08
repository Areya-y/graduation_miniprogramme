// pages/wordDetails/wordDetails.js
Page({
	data: {
		word:"state",
		phonogram:"/steɪt/",
		isCollect:1,
		interpretation:[
			{
				id:"n.",
				value:"国家；州；情形"
			},
			{
				id:"vt.",
				value:"规定；声明；陈述"
			},
			{
				id:"adj.",
				value:"国家的；州的；正式的"
			}
		],
		examples:[
			{
				English:"Since 1979,the state has given gold and silver awards for the best industrial artifacts.",
				meaning:"从1979年以来国家为优秀工艺品颁发了金奖和银奖。"
			},
			{
				English:"The state allotted them large quantities of chemical fertilizer. ",
				meaning:"国家给他们调拨了大量化肥。"
			},
			{
				English:"Since 1979， the state has given gold and silver awards for the best industrial artifacts.",
				meaning:"从1979年以来国家为优秀工艺品颁发了金奖和银奖。"
			}
		]
	},
	addCollect(){
		if (this.data.isCollect==0) {
			this.setData({
				isCollect:1
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