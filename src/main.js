let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `/*你好!我是一名前端工程师!
*接下来我将展示一下我的前端功底。
*正在接入暗网系统.............100% 系统接入成功！
*启动国际互联网连接..............100% 国际互联网连接成功！
*开始加载初始化样式
**/
#div1{
  border: 1px solid red;
  width: 400px;
  height: 400px;
}
/*
*初始化样式加载成功！
*开始与江湖各大门派建立连！
**/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*
*正在请求太极长老
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1)
  0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%,
  rgba(0,0,0,1) 100%);
}
#div1::before{
  width: 200px;
  height: 200px;
  top: 0;
  left: 50%;
  transform:translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%,
  rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 200px;
  height: 200px;
  bottom: 0;
  left: 50%;
  transform:translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%,
   rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%,
   rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    //如果是回车，就不照搬。如果不是回车，就照搬。
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      //如果n不是最后一个，就继续。
      n += 1;
      step();
    }
  }, 0.1);
};
step();
