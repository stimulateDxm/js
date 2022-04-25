let uls=document.getElementById('uls')
let lt=document.getElementById('lt')
let gt=document.getElementById('gt')
let di=document.getElementById('di')
let lis=document.querySelectorAll('ul li')
let didi=document.querySelectorAll('#didi li')

let lock=true;
let a=0;
let timer1;
//  自动向右切换

function mose(){
    if(!lock) return;
    lock=false
    lis[a].style.opacity=0
    didi[a].style.backgroundColor="#fff"
    a++
    if(a==6){
        a=0
    }
    lis[a].style.opacity=1
    didi[a].style.backgroundColor="red"

    setTimeout(()=>{
        lock=true;
    },500)
}

timer1=setInterval(()=>{
    mose()
},2000)

//移入图片时停止播放
di.addEventListener('mouseenter',()=>{
    console.log('11')
    clearInterval(timer1)
})
//离开图片时播放
di.addEventListener('mouseleave',()=>{
    timer1=setInterval(()=>{
        mose()
    },2000)
})

//  点左切换上一张
lt.addEventListener('click',()=>{
    if(!lock) return;
    lock=false
    lis[a].style.opacity=0
    didi[a].style.backgroundColor="#fff"
    a--
    if(a==-1){
        a=5
    }
    lis[a].style.opacity=1
    didi[a].style.backgroundColor="red"
    setTimeout(()=>{
        lock=true;
    },500)
})
// 点右切换下一张
gt.addEventListener('click', mose
)
//  点击圆点切换到对应的图片
for (let i=0; i<didi.length; i++){
    didi[i].addEventListener('click',function(){
        a=i
        for (let j=0; j<didi.length; j++){
            lis[j].style.opacity=0
            didi[j].style.backgroundColor="#fff"

        }
        lis[a].style.opacity=1
        didi[a].style.backgroundColor="red"

    })
}
