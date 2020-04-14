// pages/wordBook/wordBook.js
//Page Object
Page({
	data: {
		wordsList:[
			{
				id:0,
				word:"wage",
				interpretation:"n. (按小时、日或周计算的)工资，薪金v.开展，发动(运动或战争)"
			},
			{
				id:1,
				word:"pay",
				interpretation:"n.工资，薪水v.付款;偿还，缴纳;值得"
			},
			{
				id:2,
				word:"subsidy",
				interpretation:"n.财政补贴，津贴，补助金"
			},
			{
				id:3,
				word:"premium",
				interpretation:"n.保险费;额外费用;补贴，津贴;奖 品:奖金"
			},
			{
				id:4,
				word:"reward",
				interpretation:"v.奖励，奖赏，给以报酬n.回报，报酬，奖励;赏金"
			},
			{
				id:5,
				word:"interview",
				interpretation:"v.面试;采访n.面试,采访;会见"
			},
			{
				id:6,
				word:"resume",
				interpretation:"n. [-resume读音重音在前]个人简历:(文章、讲话等的)梗概，摘要v.继续， 重新开始;重返，恢复(职位等)"
			}
		]
	},
	//options(Object)
	onLoad: function(options){
		
	},
	onReady: function(){
		
	},
	onShow: function(){
		var that=this
		wx.request({
			url:"http://127.0.0.1:8080/xmut/superadmin/listwords",
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
		});	},
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
