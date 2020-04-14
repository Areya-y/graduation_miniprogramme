// pages/test/test.js
//Page Object
Page({
  data: {
    wordsList:{}
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
// Page({
//   data: {
//     a:1,
//     b:2,
//     c:0
//    },
//   addNum(){
//     this.setData({
//       b:this.data.b+1,
//       c:this.data.a/(this.data.b+1) *100+'%'
//     })
//   },
//   test(){
//     var a = 10, b = 20;
//     // 加法运算
//     console.log(30 === a + b);
//     // 减法运算
//     console.log(-10 === a - b);
//     // 乘法运算
//     console.log(200 === a * b);
//     // 除法运算
//     console.log(a / b);
//     // 取余运算
//     console.log(10 === a % b);
//   },

  
// });
