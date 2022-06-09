window.addEventListener('load',function(){
    var hour = this.document.querySelector('.hour');
    var minute = this.document.querySelector('.minute');
    var second = this.document.querySelector('.second');
    var inputTime = +new Date('2023-6-1 24:00:00');
    counDown();
    this.setInterval(counDown,1000);
    function counDown(time) {
        var nowTime = +new Date();
        var times = (inputTime - nowTime) /1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0'+ h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0'+ m : m;
        minute.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0'+ s : s;
        second.innerHTML = s;
    }
})