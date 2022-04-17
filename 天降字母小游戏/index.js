//获取id的函数
function $(ele) {
    return document.getElementById(ele)
}

//随机生成的字母
let abc = "abcdefghijklnmopqrstuvwxyz"
//记录错过的数量
let imss=0;
//下落速度
let speed = 30;
//出现的个数
let speeds=500;
//关闭速度定时器
let timesp=null;

//创建自动改变速度的函数
let speeded=()=>{
    clearInterval(timesp)
    timesp=setInterval(()=>{
        speed --
        speeds=speeds-10;
        if(speed===3 || speeds===200){
            speed===3
            speeds===200
            clearInterval(timesp)
        }
    },6000)
}
//一段时间生成一个dom的定时器
let timenew;
//节流锁
let lock = true;
//为保存开始时的时间
let time=0;
//结束弹出框函数
let over=()=>{
  $('olnum').className="olnums"
  $('imte').style.display='block'
  $('over').style.display='block'
  clearInterval(timenew)
  //关闭字母下落
  arrLi.forEach((vla, i) => {
      clearInterval(vla.timea)
  })
 times= Math.ceil((new Date().getTime()-time)/1000)
 $('imte').innerText=`用时:${ times}秒`
}

//页面选择的速度
//移入状态
// $('select').addEventListener('mouseenter',()=>{
// [...$('select').children].forEach((val,ind,arr)=>{
// val.style.display="block"
// val.addEventListener('click',()=>{
//     if(val.innerText=='慢'){
//         speed = 30
//         arr[1].innerText=val.innerText

//     }else if(val.innerText=='中'){
//         arr[1].innerText=val.innerText
//         speed = 20
//     }else if(val.innerText=='快'){
//         arr[1].innerText=val.innerText
//         speed = 5
//     }else if(val.innerText=='特快'){
//         arr[1].innerText=val.innerText
//         speed =1
//     }

// })
// })
// })

//转成大写并转成数组
let ABC = (abc.toUpperCase().split(''))
//创建数组保存生成的li
let arrLi = []
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
// //选择速度下拉函数
// let selects=()=>{
//     [...$('select').children].forEach((val,ind)=>{
//         if(ind!=0 && ind!=1){
//             val.style.display="none"
//         }
//     })
// }
// selects();

//给Fall原型增加创建掉下来的元素函数
Fall.prototype.fallInit = function () {
    //创建li
    this.lis = document.createElement('li')
    //随机生成不同的字母
    this.lis.innerText = ABC[parseInt(Math.random() * abc.length)]
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
    this.timea = setInterval(() => {
        this.a++
        this.lis.style.top = this.tops + this.a + 'px'
    }, speed)
}


//移出状态
// $('select').addEventListener('mouseleave',()=>{
//     selects();
// })
//下落函数
function xia() {
    if (!lock) return
    lock = false
    clearInterval(timenew)
    timenew = setInterval(() => {
        let fall = new Fall()
        for (let arr = arrLi.length, i = 0; i < arr; i++) {
                if(arrLi[i].a>=530){
                    imss++
                    if(imss==10){
                        over()
                    }
                    $('miss').innerText=`错过的数量:${imss}`
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
   time=new Date().getTime()

})

//结束
$('stop').addEventListener('click', () => {
   
   over()
})

//继续
// $('goon').addEventListener('click', () => {
//     $('olnum').className="s"
//     $('imte').style.display='none'
//     $('over').style.display='none'

//     xia()
//     arrLi.forEach((vla, i) => {
//         clearInterval(vla.timea)
//         vla.timea = setInterval(() => {
//             vla.a++
//             vla.lis.style.top = vla.tops + vla.a + 'px'
//         }, speed)

//     })

// })

//重来
restart.addEventListener('click', () => {
    location.reload();
})

//记录完成的数量
let num = 0;
//绑定键盘事件
document.onkeydown = function (e) {
    // if(e.key.toUpperCase)
    let keys = e.key.toUpperCase()
    for (let arr = arrLi.length, i = 0; i < arr; i++) {
        if (keys == arrLi[i].lis.innerText && arrLi[i].a >= 50 && arrLi[i].a <=500) {
            num++
            $('num').innerText = `完成的数量：${num}`
            $('dot').removeChild(arrLi[i].lis)
            arrLi.splice(i, 1)

        }
    }

}





