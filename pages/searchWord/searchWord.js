// pages/searchWord/searchWord.js
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        wordsList: []
    },
    onShow(e) {
        var that = this;

        const userID = wx.getStorageSync("userID");
        console.log(userID);
        var inputVal = that.data.inputVal;
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.userInfo']) {
                    //未登录,跳转到登录页
                    setTimeout(function(){
                        wx.navigateTo({
                            url:`/pages/login/login`,
                            success: function(res){
                            // success
                            },
                        })
                    }, 2000);
                    wx.showToast({
                        title: '先登录哦',
                        icon: 'none',
                        duration: 2000
                    })
                }else{
                    wx.request({
                        url: "http://127.0.0.1:8080/xmut/wordDetalisController/searchword?word=" + inputVal + "&&userID=" + userID,
                        method: 'GET',
                        data: {},
                        success: function (res) {
                            var wordlist = res.data.searchword;
                            if (wordlist == null) {
                                var toastText = '获取数据失败' + res.data.errMsg;
                                console.log(toastText);
                                wx.showToast({
                                    title: toastText,
                                    icon: 'none',
                                    duration: 2000,
                                });
                            } else {
                                that.setData({
                                    wordsList: wordlist
                                });
                            }
                        }
                    });
                }
            }
        })
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    cancelInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        const userID = wx.getStorageSync("userID");
        var that = this
        var inputVal = e.detail.value
        console.log(e.detail.value)
        // var regLetter=new RegExp('^[\u4e00-\u9fa5_a-zA-Z]+$','g');//判断用户输入的是否为字母
        // var rsLetter=regLetter.test(e.detail.value);
        // console.log("rs:::"+rsLetter);
        if (inputVal == " ") {
            wx.showToast({
                title: '请输入文字',
                icon: 'none',
                duration: 2000
            })
            this.cancelInput()
        } else {
            that.setData({
                inputVal: inputVal
            });
            wx.request({
                url: "http://127.0.0.1:8080/xmut/wordDetalisController/searchword?word=" + inputVal + "&&userID=" + userID,
                method: 'GET',
                data: {},
                success: function (res) {
                    var wordlist = res.data.searchword;
                    if (wordlist == null) {
                        var toastText = '获取数据失败' + res.data.errMsg;
                        wx.showToast({
                            title: toastText,
                            icon: 'none',
                            duration: 2000,
                        });
                    } else {
                        that.setData({
                            wordsList: wordlist
                        });
                    }
                }
            });
        }
    },
    jumpToWordDetails: function (e) {
        var index = e.target.dataset.index
        let wordStr = JSON.stringify(this.data.wordsList[index]);
        if (wordStr) {
            wx.navigateTo({
                url: "/pages/wordDetails/wordDetails?word=" + wordStr,
                success: function (res) {
                    // success
                },
            })
        } else {
            wx.showToast({
                title: '请选择单词',
                icon: 'none',
                duration: 2000
            })
        }

        // url="/pages/wordDetails/wordDetails?sentences={{item.sentences}}" 
    },
});