// pages/studyWord/studyWord.js
Page({

	data: {
		rate:67,
		TabCur: 0,
		scrollLeft:0,
		strangeGrade_num:15,
		knowGrade_num:20,
		familiarGrade_num:15,
		strangeWordsList:[
			{
				id:0,
				word:"wage",
				interpretation:"n. (按小时、日或周计算的)工资，薪金v.开展，发动(运动或战争)"
			},
			{
				id:1,
				word:"pay",
				interpretation:"n.工资，薪水v.付款;偿还，缴纳;值得"
			}
		],
		knowWordsList:[
			{
				id:0,
				word:"subsidy",
				interpretation:"n.财政补贴，津贴，补助金"
			},
			{
				id:1,
				word:"premium",
				interpretation:"n.保险费;额外费用;补贴，津贴;奖 品:奖金"
			},
			{
				id:2,
				word:"reward",
				interpretation:"v.奖励，奖赏，给以报酬n.回报，报酬，奖励;赏金"
			}
		],
		familiarWordsList:[
			{
				id:0,
				word:"interview",
				interpretation:"v.面试;采访n.面试,采访;会见"
			},
			{
				id:1,
				word:"resume",
				interpretation:"n. [-resume读音重音在前]个人简历:(文章、讲话等的)梗概，摘要v.继续， 重新开始;重返，恢复(职位等)"
			}
		]

	},
	tabSelect(e) {
		this.setData({
		  TabCur: e.currentTarget.dataset.id,
		  scrollLeft: (e.currentTarget.dataset.id-1)*60
		})
	  }
})