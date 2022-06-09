window.addEventListener('load',function(){
    var img = this.document.querySelector('.img');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    var bigImg = this.document.querySelector('.bigImg');
    img.addEventListener('mouseover',function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    img.addEventListener('mouseout',function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    img.addEventListener('mouseover',function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        if (maskX <= 0){
            maskX = 0;
        } else if (maskX >= img.offsetWidth - mask.offsetWidth){
            maskX = img.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0){
            maskY = 0;
        } else if (maskY >= img.offsetHeight - mask.offsetWidth){
            maskY = img.offsetHeight - mask.offsetWidth;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var maskMax = img.offsetWidth - mask.offsetWidth;
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX =maskX * bigMax / maskMax;
        var bigY =maskY * bigMax / maskMax;
        bigImg.style.left = -bigX +'px';
        bigImg.style.top = -bigY +'px';
    })
})