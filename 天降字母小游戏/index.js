//获取id的函数
function $(ele) {
    return document.getElementById(ele)
}

//转成大写并转成数组
let ABC = "abcdefghijklnmopqrstuvwxyz".toUpperCase().split('')
//创建数组保存生成的li
let arrLi = []
//记录错过的数量
let imss = 0;
//下落速度
let speed = 20;
//出现的个数
let speeds = 300;
//关闭速度定时器
let timesp = null;
//定义一段时间生成一个dom的定时器
let timenew;
//节流锁
let lock = true;
//为保存开始时的时间
let time = 0;

//创建自动改变速度的函数
let speeded = () => {
    clearInterval(timesp)
    timesp = setInterval(() => {
        speed--
        speeds = speeds - 10;
        if (speed === 5 || speeds === 200) {
            speed =speed || 5
            speeds =speeds || 200
            clearInterval(timesp)
        }
    }, 3000)
}




//给Fall原型增加创建要下落字母元素类
function Fall() {
    this.timea = null
    //为了改变top值设置的数值
    this.a = 0
    //初始化
    this.fallInit()
    //把实例自己推入到数组中
    arrLi.push(this)
    //更新top
    this.upFall()
}


//给Fall原型增加创建掉下来的元素函数
Fall.prototype.fallInit = function () {
    //创建li
    this.lis = document.createElement('li')
    //随机生成不同的字母
    this.lis.innerText = ABC[parseInt(Math.random() * ABC.length)]
    //上树
    $('dot').appendChild(this.lis)
    //随机生成不同的left位置
    this.lis.style.left = parseInt(Math.random() * 65) + "vw"
    this.tops = -50
    this.lis.style.top = this.tops + 'px'

}


//下落移动
Fall.prototype.upFall = function () {
    clearInterval(this.timea)
    this.timea = setInterval( ()=>{
            this.a++
            this.lis.style.top = this.tops + this.a + 'px'
    },speed)

}
//结束弹出框函数
let over = () => {
    $('olnum').className = "olnums"
    $('imte').style.display = 'block'
    $('over').style.display = 'block'
    clearInterval(timenew)
    //关闭字母下落
    arrLi.forEach((vla) => {
        clearInterval(vla.timea)
    })
    times = Math.ceil((new Date().getTime() - time) / 1000)
    $('imte').innerText = `用时:${times}秒`
}
//下落函数
function xia() {
    if (!lock) return
    lock = false
    clearInterval(timenew)
    timenew = setInterval(() => {
        let fall = new Fall()
        for (let arr = arrLi.length, i = 0; i < arr; i++) {
            if (arrLi[i].a >= 530) {
                imss++
                if (imss === 10) {
                    over()
                }
                $('miss').innerText = `错过的数量:${imss}`
                $('dot').removeChild(arrLi[i].lis)
                arrLi.splice(i, 1)
            }
        }

    }, 500)

    setTimeout(() => {
        lock = true
    }, 200)
}

//开始
$('go').addEventListener('click', () => {
    $('go').style.display = 'none'
    xia()
    //改变速度按钮
    speeded()
    time = new Date().getTime()

})

//结束
$('stop').addEventListener('click', () => {

    over()
})


//重来
$('restart').addEventListener('click', () => {
    location.reload();
})

//记录完成的数量
let num = 0;
//绑定键盘事件
document.onkeydown = function (e) {
    // if(e.key.toUpperCase)
    let keys = e.key.toUpperCase()
    for (let arr = arrLi.length, i = 0; i < arr; i++) {
        if (keys == arrLi[i].lis.innerText && arrLi[i].a >= 50 && arrLi[i].a <= 500) {
            num++
            $('num').innerText = `完成的数量：${num}`
            $('dot').removeChild(arrLi[i].lis)
            arrLi.splice(i, 1)
            console.log(arrLi.length)

        }
    }

}





