let canvas = document.getElementById('imocd');
canvas.width = 520
canvas.height = 520
let ctx = canvas.getContext('2d');

ctx.font='60px  Microsoft YaHei'
ctx.fillText('你喜欢多啦A梦吗',0,100)
ctx.strokeStyle='pind'
ctx.stroke()
setTimeout(()=> {

    face(225, 225, 100, "blue")//脸外层
    face(225, 240, 80, "#fff")//脸内层
}, 1000)

setTimeout(()=> {
    eye(200, 160, 25, 210, 8, '#000', '#fff')//左眼
    eye(250, 160, 25, 240, 8, '#000', '#fff')//右眼
}, 2000)

setTimeout(()=> {

    eye(225, 185, 10, 222, 3, '#fff', '#fe0069')//鼻子
}, 3000)

setTimeout(()=> {
    //脸肉肉
    pi(155, 225, 25, 0.4, 1.7, '#fff')
    pi(290, 226, 25, 1.4, 0.65, '#fff')
}, 3000)

setTimeout(()=> {

    lines(225, 194, 225, 249)

    lines(240, 205, 285, 195)//右三横
    lines(245, 215, 295, 215)
    lines(240, 225, 295, 235)


    lines(205, 215, 155, 215)//左三横
    lines(210, 205, 165, 195)
    lines(210, 225, 160, 235)

}, 4000)

setTimeout(()=> {

    pi(221, 228, 66, 0.1, 0.9, '#fe0069')//嘴


}, 5000)

setTimeout(()=> {

    pi(221, 295, 25, 1.06, 1.94, '#fe8400')//嘴
    pi(221, 227.65, 66, 0.38, 0.62, '#fe8400')//嘴

}, 6000)

setTimeout(()=> {

    rects(150, 320, 150, 160, "blue")//身体
    pi(225, 488, 20, 1.1, 1.9, '#fff')

    linez(141, 281, 180, 320, 150, 330)//为了隐藏不必要的颜色
    lines(150, 330, 180, 320, 'blue')


    pi(221, 380, 66, 0, 2, '#fff')//口袋
    pi(221, 390, 50, 0, 1, '#fff')//口袋
    lines(170, 390, 271, 390)


    rects(165, 305, 120, 15, '#fe0069')//钉铛绳
    pi(166, 312, 8, 0.5, 1.5, '#fe0069')//钉铛绳
    pi(284, 312, 8, 1.5, 0.5, '#fe0069')//钉铛绳
    eye(221, 340, 25, 220, 8, '#e9c44e', '#f1f900')//钉铛
    rects(200, 325, 44, 8.5, '#f1f900')//钉铛
    pi(201, 329, 5, 0.5, 1.5, '#f1f900')//钉铛
    pi(243, 329, 5, 1.5, 0.5, '#f1f900')//钉铛
    lines(221, 347, 221, 365)
}, 7000)

setTimeout(()=> {

    linez(142, 280, -30, 165, 150, 330)
    linez(100, 200, -30, 165, 88, 275, '#fff', '#fff')
    pi(80, 250, 25, 0, 2, '#fff')//左手

}, 8000)


setTimeout(()=>{
    linez(286, 302, 500, 485, 287, 350)//右手
    linez(340, 300, 500, 485, 310, 400, '#fff', '#fff')
    pi(330, 355, 25, 0, 2, '#fff')
},9000)

setTimeout(()=> {

    rects(150, 480, 55, 20, '#fff')//左脚
    pi(150, 490, 10, 0.4, 1.6, "#fff")
    pi(205, 490, 10, 1.4, 0.6, "#fff")
    rects(245, 480, 55, 20, '#fff')//右脚
    pi(243, 490, 10, 0.4, 1.6, "#fff")
    pi(299, 490, 10, 1.4, 0.6, "#fff")

}, 10000)



//眼，鼻子函数
function eye(w, h, r, e, r1, clo1, clo2) {
    ctx.beginPath()
    ctx.arc(w, h, r, 0, 2 * Math.PI)
    ctx.strokeStyle = '#000'
    ctx.fillStyle = clo2
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
    //眼球
    ctx.beginPath()
    ctx.arc(e, h, r1, 0, 2 * Math.PI)
    ctx.fillStyle = clo1
    ctx.lineWidth = 2
    ctx.fill();
}
//脸函数
function face(w, h, r, clo) {
    ctx.beginPath()
    ctx.arc(w, h, r, 0.7 * Math.PI, 0.3 * Math.PI)
    ctx.strokeStyle = '#000'
    ctx.fillStyle = clo
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
}
//半圆函数
function pi(w, h, r, s, e, clo) {
    ctx.beginPath()
    ctx.arc(w, h, r, s * Math.PI, e * Math.PI)
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 2
    ctx.fillStyle = clo
    ctx.fill()
    ctx.stroke()
}
//线性函数
function lines(w, h, ew, eh, col = '#000') {
    ctx.beginPath()
    ctx.moveTo(w, h)
    ctx.lineTo(ew, eh)
    ctx.lineWidth = 2
    ctx.strokeStyle = col
    ctx.stroke()
}

//折线函数
function linez(w, h, ew, eh, zw, zh, col = 'blue', col1 = '#000') {
    ctx.beginPath()
    ctx.moveTo(w, h)
    ctx.lineTo(ew, eh)
    ctx.lineTo(zw, zh)
    // ctx.closePath()
    ctx.strokeStyle = col1
    ctx.fillStyle = col
    ctx.fill()
    ctx.stroke()
}

//矩形函数
function rects(w, h, ew, eh, col) {
    ctx.beginPath()
    ctx.rect(w, h, ew, eh)
    ctx.strokeStyle = '#000'
    ctx.fillStyle = col
    ctx.fill()
    ctx.stroke()
}
