/*  

    轮播 JS 步骤：
    1. 添加按钮点击事件
    2. 自动轮播
    3. 鼠标滑入\滑出控制轮播

*/

// 1. 添加按钮点击事件
let allButtons = $('#buttons > ul > li')

for(let i = 0;i< allButtons.length;i++){
    $(allButtons[i]).on('click',function(e){
        let index = $(e.currentTarget).index()
        let slideWidth = index * -1226
        $('.window > .container').css({
            transform: 'translate(' + slideWidth + 'px)'
        })
        $(allButtons[index]).addClass('active')
        .siblings('.active').removeClass('active')
        n = i    // 重置自动轮播位置
    })
}

// 2. 自动轮播
let n = 0
let size = allButtons.length
let timerId = setTimer()

// 3. 鼠标滑入\滑出控制轮播
$('.window').on('mouseenter',function(e){
    window.clearInterval(timerId)
})

$('.window').on('mouseleave',function(e){
    timerId = setTimer()
})

// 函数
function setTimer(){
    return  setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click') // 模拟点击按钮达到滑动目的
    },3000)
}