// pages/searchWord/searchWord.js
Page({
    data: {
        inputShowed: false,
        inputVal: ""
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
        console.log(e.detail.value)
        // var regLetter=new RegExp('^[\u4e00-\u9fa5_a-zA-Z]+$','g');//判断用户输入的是否为字母
        // var rsLetter=regLetter.test(e.detail.value);
        // console.log("rs:::"+rsLetter);
        this.setData({
            inputVal: e.detail.value
        });
        // if (rsLetter) {
           
        //     // console.log(inputVal);
            
        // } else {
        //     wx.showToast({
        //         title: '请输入英文',
        //         icon: 'none',
        //         duration: 3000
        //     });
        // }
    }
});