// pages/selfStudyRoom_index/selfStudyRoom_index.js
Page({
	data: {
		TabCur: 0,
		scrollLeft:0,
		//用户是否有自习室
		isUserHaveStudyRoom:0
	  },
	  tabSelect(e) {
		this.setData({
		  TabCur: e.currentTarget.dataset.id,
		  scrollLeft: (e.currentTarget.dataset.id-1)*60
		})
	  }
})