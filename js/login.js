window.addEventListener('load',function(){
    var btn = this.document.querySelector('.btn');
    var time = 60;
    btn.addEventListener('click',function(){
        btn.disabled = true;
        var timer = setInterval(function(){
            if (time == 0){
                clearInterval(timer);
                btn.disabled = false;
                btn.style.color = 'black';
                btn.innerHTML = '发送验证码';
                time = 3;
            } else {
                btn.style.color = '#fff';
                btn.innerHTML = '还剩下' + time + '秒';
                time--;
            }
        },1000);
    })
})