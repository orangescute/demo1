window.addEventListener('load',function(){
    var prev = this.document.querySelector('.prev');
    var next = this.document.querySelector('.next');
    var focus =this.document.querySelector('.focus');
    function animate(obj, target, callback) {
        //调用时callback()
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // 缓动动画公式:(目标值-现在的位置) / 10
            //  把步长值改为整数,避免出现没有到达target,需要往上取整
            var step=(target-obj.offsetLeft)/10;
            step = step>=0?Math.ceil(step):Math.floor(step);
            if (obj.offsetLeft == target) {
                //停止
                clearInterval(obj.timer);
                //回调函数写到定时器结束
                if (callback){
                    callback();
                }
            }
            //把每次加一这个步长值改为一个慢慢变小的值
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }    
    focus.addEventListener('mouseenter',function(){
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function(){
            next.click();
        },3000);
    })
    // 动态创建小圆点
    var ul = focus.querySelector('ul');
    var li = ul.querySelector('li');
    var ol = this.document.querySelector('.circle');
    for (var i = 0;i < ul.children.length; i++){
        var li = this.document.createElement('li');
        // 记录小圆点的索引号
        li.setAttribute('index',i);
        ol.appendChild(li);
        // 当前小圆点添加类名
        li.addEventListener('click',function(){
            for (var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 点击图片，移动图片
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            var focusWidth = ul.offsetWidth/4;
            animate(ul ,-index*focusWidth);
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    // 控制小圆点的播放
    var circle = 0;
    next.addEventListener('click',function(){
        if (num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        var focusWidth = ul.offsetWidth/4;
        animate(ul ,-num*focusWidth);
        circle++;
        if (circle == ul.children.length - 1){
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })
    prev.addEventListener('click',function(){
        if (num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        var focusWidth = ul.offsetWidth/4;
        animate(ul ,-num*focusWidth);
        circle--;
        if (circle < 0){
            circle = 2;
        }
        for (var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })
    var timer = this.setInterval(function(){
        next.click();
    },3000);
})