// 获取所有具有 'clickable' 类的元素
var clickele = document.getElementsByClassName('label');
idlist=['学习','思考','游戏','动漫'];
// 遍历这些元素并为每个元素添加点击事件监听器
for (let i = 0; i < 4; i++) {
    let element = document.getElementById(idlist[i]);
    // 初始化动画名称变量
    // var animationName = style.getPropertyValue('--animation-name');
    clickele[i].addEventListener('click', 
    function(){
        let style = window.getComputedStyle(element);
        let animationName = element.style.animationName;
        // 为元素添加点击事件监听器
        if (animationName ==='outshift') {element.style.animationName = 'shiftin';}
        else { element.style.animationName = 'outshift';}
    }
);
}
