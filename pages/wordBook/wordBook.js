// pages/wordBook/wordBook.js
//Page Object
Page({
	data: {
		wordsList:[]
	},
	//options(Object)
	onLoad: function(options){
		
	},
	onReady: function(){
		
	},
	onShow: function(){
		var that=this
		wx.request({
			url:"http://127.0.0.1:8080/xmut/listwords",
			method:'GET',
			data:{},
			success:function (res){
				var wordlist=res.data.listWords;
				if (wordlist==null) {
					var toastText='获取数据失败'+res.data.errMsg;
					wx.showToast({
						title: toastText,
						icon: 'none',
						duration: 2000,
					});
				}	else{
					that.setData({
						wordsList:wordlist
					});
				}
			}
		});	
	},
	onHide: function(){

	},
	onUnload: function(){

	},
	onPullDownRefresh: function(){

	},
	onReachBottom: function(){

	},
	onShareAppMessage: function(){

	},
	onPageScroll: function(){

	},
	//item(index,pagePath,text)
	onTabItemTap:function(item){

	}
});
