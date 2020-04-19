// pages/wordCards/wordCards.js
// var postData = require("../../data/post_data.js");
let touchDotX = 0; //X按下时坐标
let touchDotY = 0; //y按下时坐标
Page({
  data: {
    userID:0,
    rate_word:'0%',
    index:0,
    words_thisBook: [],
  
    isFront1: true,
    isFront2: true,
    isFront3: true,
    animationData1: {},
    animationData2: {},
    animationData3: {},
    ballTop1: 240,
    ballTop2: 230,
    ballTop3: 220,
    ballWidth1: 680,
    ballWidth2: 640,
    ballWidth3: 605,
    index1: 3,
    index2: 2,
    index3: 1,
  },
  onLoad(e){
    const userID=wx.getStorageSync("userID");
		this.setData({userID});
		var model = decodeURIComponent(e.wordsList);
		var wordsList = JSON.parse(model);
    console.log(wordsList);
    this.setData({
      words_thisBook:wordsList,
      rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
    });
	},

  /**
   *  卡片1手势
   */
  touchstart1: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend1: function (event) {
    // 手指离开屏幕时记录的坐标
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    // 起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之差
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    // 两点横纵坐标差的绝对值
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    //起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之间的距离
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    // 如果delta超过60px（可以视情况自己微调）,判定为手势触发
    let wordsList=JSON.stringify(this.data.words_thisBook);
    if (delta >= 60) {
      // 如果 |x0-x1|>|y0-y1|,即absX>abxY,判定为左右滑动
      if (absX > absY) {
        // 如更tmX<0，即(离开点的X)-(起始点X)小于0 ，判定为左滑
        if (tmX < 0) {
          console.log("左滑=====");
		  // 执行左滑动画
		  console.log(this.data.index==this.data.words_thisBook.length - 1);
		  
		  if (this.data.index==this.data.words_thisBook.length - 1) {
        
          setTimeout(function(){
            wx.redirectTo({
              url:`/pages/wordBook/wordBook?wordsList=${encodeURIComponent(wordsList)}`,
            })
          }, 2000);
          wx.showToast({
            title: '本轮学习结束啦',
            icon: 'none',
            duration: 2000
			})
		  }
		  else{
				this.Animation1(-500);
		  		this.setData({
					index:this.data.index+1,
					});
				this.setData({
					rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
				});
		  }
		 
          // 如更tmX>0，即(离开点的X)-(起始点X)大于0 ，判定为右滑
        } else {
          console.log("右滑=====");
		  // 执行右滑动-
		  if (this.data.index==0) {
			wx.showToast({
				title: '第一页',
				icon: 'none',
				duration: 1000
			})
		  }
		  else{
			  	this.Animation1(500);
		  		this.setData({
					  index:this.data.index-1,
					});
				this.setData({
					rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
				});
		  }
        }
        // 如果 |x0-x1|<|y0-y1|,即absX<abxY,判定为上下滑动
      } else {
        // 如更tmY<0，即(离开点的Y)-(起始点Y)小于0 ，判定为上滑
        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront1: !this.data.isFront1
          });
          // 如更tmY>0，即(离开点的Y)-(起始点Y)大于0 ，判定为下滑
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront1: !this.data.isFront1
          });
        }
      }
    } else {
      console.log("手势未触发=====");
    }

    // 让上一张卡片展现正面（如果之前翻转过的话）
    this.setData({
      isFront3: true,
    });
  },

  /**
   *  卡片2手势
   */
  touchstart2: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;

    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);

  },
  // 移动结束处理动画
  touchend2: function (event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
		  console.log("左滑=====");
		  if (this.data.index==this.data.words_thisBook.length - 1) {
        
        setTimeout(function(){
          wx.redirectTo({
            url:`/pages/wordBook/wordBook?wordsList=${encodeURIComponent(wordsList)}`,
          })
        }, 2000);
			wx.showToast({
				title: '本轮学习结束啦',
				icon: 'none',
				duration: 2000
			})
		  }
		  else{
				this.Animation2(-500);
				  this.setData({index:this.data.index+1});
				  this.setData({
					rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
				});
		  }
        } else {
          console.log("右滑=====");
		  if (this.data.index==0) {
			wx.showToast({
				title: '第一页',
				icon: 'none',
				duration: 1000
			})
		  }
		  else{
			  	this.Animation2(500);
				  this.setData({index:this.data.index-1});
				  this.setData({
					rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
				});
		  }
        }
      } else {
        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront2: !this.data.isFront2
          });
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront2: !this.data.isFront2
          });
        }

      }
    } else {
      console.log("手势未触发=====");
    }

    this.setData({
      isFront1: true,
    });

  },

  /**
   *  卡片3手势
   */
  touchstart3: function (event) {
    touchDotX = event.touches[0].pageX; // 获取触摸时的原点
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  // 移动结束处理动画
  touchend3: function (event) {
    let touchMoveX = event.changedTouches[0].pageX;
    let touchMoveY = event.changedTouches[0].pageY;
    let tmX = touchMoveX - touchDotX;
    let tmY = touchMoveY - touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    let delta = Math.sqrt(absX * absX + absY * absY);
    console.log('起始点和离开点距离:' + delta + 'px');
    let wordsList=JSON.stringify(this.data.words_thisBook);
    if (delta >= 60) {
      if (absX > absY) {
        if (tmX < 0) {
		  console.log("左滑=====");
		  if (this.data.index==this.data.words_thisBook.length - 1) {
       
        setTimeout(function(){
          wx.redirectTo({
            url:`/pages/wordBook/wordBook?wordsList=${encodeURIComponent(wordsList)}`,
          })
        }, 2000);
			wx.showToast({
				title: '本轮学习结束啦',
				icon: 'none',
				duration: 2000
			})
		  }
		  else{
				this.Animation3(-500);
				  this.setData({index:this.data.index+1});
				  this.setData({
					rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
				});
		  }
        } else {
          console.log("右滑=====");
		  if (this.data.index==0) {
			wx.showToast({
				title: '第一页',
				icon: 'none',
				duration: 1000
			})
		  }
		  else{
			  	this.Animation3(500);
				  this.setData({index:this.data.index-1});
				  this.setData({
					rate_word:(this.data.index+1)/(this.data.words_thisBook.length) *100+'%'
				});
		  }
        }
      } else {

        if (tmY < 0) {
          console.log("上滑动=====");
          this.setData({
            isFront3: !this.data.isFront3
          });
        } else {
          console.log("下滑动=====");
          this.setData({
            isFront3: !this.data.isFront3
          });
        }
      }
    } else {
      console.log("手势未触发=====");
    }

    this.setData({
      isFront2: true,
    });

  },

  /**
   * 卡片1:
   * 左滑动右滑动动画
   */
  Animation1: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });
    this.animation = animation;

    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData1: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        ballTop1: 220,
        ballLeft1: -302.5,
        ballWidth1: 605,
        index1: 1,

        ballTop2: 240,
        ballLeft2: -340,
        ballWidth2: 680,
        index2: 3,

        ballTop3: 230,
        ballLeft3: -320,
        ballWidth3: 640,
        index3: 2,
      })
    }, 500);
  },

  /**
   * 卡片2:
   * 左滑动右滑动动画
   */
  Animation2: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });

    this.animation = animation;

    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData2: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        ballTop1: 230,
        ballLeft1: -320,
        ballWidth1: 640,
        index1: 2,

        ballTop2: 220,
        ballLeft2: -302.5,
        ballWidth2: 605,
        index2: 1,

        ballTop3: 240,
        ballLeft3: -340,
        ballWidth3: 680,
        index3: 3,
      })
    }, 500)
  },

  /**
   * 卡片3:
   * 左滑动右滑动动画
   */
  Animation3: function (translateXX) {
    let animation = wx.createAnimation({
      duration: 680,
      timingFunction: "ease",
    });

    this.animation = animation;
    if (translateXX > 0) {
      this.animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
    } else {
      this.animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
    }

    this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
      duration: 10
    });

    this.setData({
      animationData3: this.animation.export(),
    });

    setTimeout(() => {
      this.setData({
        ballTop1: 240,
        ballLeft1: -340,
        ballWidth1: 680,
        index1: 3,

        ballTop2: 230,
        ballLeft2: -320,
        ballWidth2: 640,
        index2: 2,

        ballTop3: 220,
        ballLeft3: -302.5,
        ballWidth3: 605,
        index3: 1,
      })
    }, 500);
  },
  changeCollect(){
    var word_change="words_thisBook["+this.data.index+"].isCollect";
    var wordID=this.data.words_thisBook[this.data.index].wordId;
    console.log(wordID);
		if (this.data.words_thisBook[this.data.index].isCollect==0) {
			this.setData({
			  [word_change]:1
      });
      wx.request({
        url: 'http://127.0.0.1:8080/xmut/wordLearningController/addCollect',
        data: {
          "wordID":wordID,
          "userID":this.data.userID,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: (result)=>{
          console.log(result);
          wx.showToast({
            title: '收藏成功',
            icon: 'none',
            duration: 2000
          })
        }
      });
		} else {
			this.setData({
				[word_change]:0
      });
      wx.request({
        url: 'http://127.0.0.1:8080/xmut/wordLearningController/cancelCollect',
        data: {
          "wordID":wordID,
          "userID":this.data.userID,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: (result)=>{
          console.log(result);
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