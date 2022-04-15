//获取id的函数
function $(ele){
    return document.getElementById(ele)
}

//随机生成的字母
let abc="abcdefghijklnmopqrstuvwxyz"

//转成大写并转成数组
let ABC=(abc.toUpperCase().split(''))
//创建数组保存生成的li
let arrLi=[]
//创建要下落字母元素类
function Fall(){
    this.timea=null
    this.a =0
    //初始化
    this.fallInit()
    //把实例自己推入到数组中
    arrLi.push(this)
    //更新top
    this.upFall()
}

//创建掉下来的元素函数
Fall.prototype.fallInit=function(){
//创建li
this.lis=document.createElement('li')
//随机生成不同的字母
this.lis.innerText=ABC[parseInt(Math.random()*abc.length)]
//上树
$('dot').appendChild(this.lis)
//随机生成不同的left位置
this.lis.style.left=parseInt(Math.random()*65)+"vw"
this.tops=-50
this.lis.style.top=this.tops+'px'
}
//下落移动
Fall.prototype.upFall=function(){
this.timea= setInterval(()=>{
        this.a++
        this.lis.style.top=this.tops+this.a+'px'
    },20)

  
}
//一段时间生成一个dom
let timenew;
//节流锁
let lock=true;
//下落函数
function xia(){
    if(!lock) return;
    lock=false
    clearInterval(timenew)
    timenew=setInterval(()=>{
        let fall=new Fall()
    },1000)
    console.log("11")
    setTimeout(()=>{
        lock=true
    },1000)
}

//开始
$('go').addEventListener('click',()=>{
    xia()
})
//暂停
$('stop').addEventListener('click',()=>{
    clearInterval(timenew)
    //关闭字母下落
   arrLi.forEach((vla,i)=>{
    clearInterval(vla.timea)
   })
    
})
//结束
$('over').addEventListener('click',()=>{
    clearInterval(timenew)
    //关闭字母下落
   arrLi.forEach((vla,i)=>{
    clearInterval(vla.timea)
   })
    
})
//继续
$('goon').addEventListener('click',()=>{
    xia()
    arrLi.forEach((vla,i)=>{
       vla.timea= setInterval(()=>{
        vla.a++
        vla.lis.style.top=vla.tops+vla.a+'px'
    },20)

       })

})




