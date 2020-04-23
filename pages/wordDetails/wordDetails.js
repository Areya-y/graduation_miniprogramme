// pages/wordDetails/wordDetails.js
Page({
	data: {
		userID:0,
		word:{
			wordId: 10875,
			word: "accelerate",
			soundMark: "ək'seləreɪt",
			interpretation: [
			"v.加速；提前；跳级"
			],
			sentences: [
			"Our present task is to accelerate economic growth.",
			"加速经济发展是我们当前的任务。",
			"The leader is losing ground as the rest of the runners accelerate.",
			"领先者在其余赛跑者加速时就逐渐失去了优势。",
			"We will accelerate the reform of the financial system under these circumstances.",
			"在这一背景情况下,我们将加快金融体制改革。",
			"The decline of her health seemed to suddenly accelerate.",
			"她的健康状况好像突然提前衰退了。"
			],
			inflexion: "形容词: accelerative 过去式: accelerated 过去分词: accelerated 现在分词: accelerating 第三人称单数: accelerates ",
			isCollect: 0,
			studyNum: 0,
			writeNum: 0,
			testRequency: 4,
			degree: 1
		}
	},
	onLoad: function(options) {
		var that=this;
		const userID=wx.getStorageSync("userID");
		that.setData({userID});
		// var that=this
		//将字符串转成json
		let word = JSON.parse(options.word);
		console.log(word);
		that.setData({
			word:word
		});
	  },
	  changeCollect(){
		  var that=this
		if (that.data.word.isCollect==0) {
			wx.request({
				url: 'http://127.0.0.1:8080/xmut/wordLearningController/addCollect',
				data: {
					"wordID":that.data.word.wordId,
					"userID":that.data.userID,
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				success: (result)=>{
					console.log(result);
					
					var word=that.data.word;
					word.isCollect=1;
					that.setData({
						word:word
					})
					wx.showToast({
						title: '收藏成功',
						icon: 'none',
						duration: 2000
					})
				}
			});
		} else {
			wx.request({
				url: 'http://127.0.0.1:8080/xmut/wordLearningController/cancelCollect',
				data: {
					"wordID":that.data.word.wordId,
					"userID":that.data.userID,
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				success: (result)=>{
					console.log(result);
					
					var word=that.data.word;
					word.isCollect=0;
					that.setData({
						word:word
					})
					wx.showToast({
						title: '取消收藏',
						icon: 'none',
						duration: 2000
					})
				}
			});
		}
	}
})