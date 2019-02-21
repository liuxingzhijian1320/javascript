function Ball(options) {
    this._init(options)
}

Ball.prototype = {
    // 初始化
    _init: function(options) {
        // 圆的必要属性
        this.parentId = options.parentId;
        this.left = options.left;
        this.top = options.top;
        this.r = 60;
        this.bgColor = options.bgColor || 'red'

        // 小球的变化量
        this.dX = randomIntFromInterval(-5, 5); // 水平
        this.dY = randomIntFromInterval(-5, 5); // 垂直
        this.dR = randomIntFromInterval(1, 3); // 圆的半径
    },
    // 渲染
    render: function() {

        var parentNode = document.getElementById(this.parentId);
        var childNode = document.createElement('div');
        parentNode.appendChild(childNode)

        childNode.style.position = 'absolute';
        childNode.style.left = this.left + 'px';
        childNode.style.top = this.top + 'px';
        childNode.style.width = this.r + 'px';
        childNode.style.height = this.r + 'px';
        childNode.style.borderRadius = '50%';
        childNode.style.backgroundColor = this.bgColor;
    },
    // 更新
    update: function() {
        this.left += this.dX;
        this.top += this.dY;
        this.r -= this.dR;

        // 圆的半径小0的时候 干掉小球
        if (this.r <= 0) {
            this.r = 0;
            // 过滤r=0的小球
            ballArr = ballArr.filter(item => item.r != 0);
        }
    }
};