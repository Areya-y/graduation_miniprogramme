// pages/test/test.js
Page({
  data: {
    a:1,
    b:2,
    c:0
   },
  addNum(){
    this.setData({
      b:this.data.b+1,
      c:this.data.a/(this.data.b+1) *100+'%'
    })
  },
  test(){
    var a = 10, b = 20;
    // 加法运算
    console.log(30 === a + b);
    // 减法运算
    console.log(-10 === a - b);
    // 乘法运算
    console.log(200 === a * b);
    // 除法运算
    console.log(a / b);
    // 取余运算
    console.log(10 === a % b);
  }
  
});
