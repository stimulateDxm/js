let uls = document.getElementById('uls')
let lt = document.getElementById('lt')
let gt = document.getElementById('gt')
let di = document.getElementById('di')
let lock = true;
let a = 0;
let timer1;

//创建对应图片的圆点节点
let oDiv = document.createElement('div')
oDiv.innerHTML = ` <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         <li></li>
                         `
di.appendChild(oDiv)
let oDivLis = oDiv.querySelectorAll('li')
oDivLis[0].style.backgroundColor = 'red'
//圆点跟着图片切换
let vLis = oDivLis.length

for (let i = 0; i < vLis; i++) {

    oDivLis[i].addEventListener('click', function () {
        for (let j = 0; j < vLis; j++) {
            oDivLis[j].style.backgroundColor = '#fff'
        }
        this.style.backgroundColor = "red"
        uls.style.left = i * -400 + "px"
        a = i
    })
}

//  向右切换函数
function mose() {

    if (!lock) return;
    lock = false
    for (let j = 0; j < vLis; j++) {
        oDivLis[j].style.backgroundColor = '#fff'
    }
    a++
    if (a === 6) {
        a = 0
    }
    uls.style.left = a * -400 + "px"
    oDivLis[a].style.backgroundColor = 'red'
    setTimeout(() => {
        lock = true
    }, 500)
}
//自动切换函数
timer1 = setInterval(() => {
    mose();
}, 2000)
//移入图片时停止播放
di.addEventListener("mouseenter", () => {
    clearInterval(timer1)
})
//离开图片时播放
di.addEventListener("mouseleave", () => {
    timer1 = setInterval(() => {
        mose();
    }, 2000)
})
//  点左向左切换
lt.addEventListener("click", () => {
    if (!lock) return;
    lock = false
    for (let j = 0; j < vLis; j++) {
        oDivLis[j].style.backgroundColor = '#fff'
    }
    a--;
    if (a === -1) {
        a = 5;
    }
    uls.style.left = a * -400 + "px"
    oDivLis[a].style.backgroundColor = 'red'
    setTimeout(() => {
        lock = true
    }, 500)

})
// 点右向右切换
gt.addEventListener("click", () => {
    mose();
})
