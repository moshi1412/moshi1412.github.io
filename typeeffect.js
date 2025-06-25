var timerId;
var currentText = ""; // 用于存储当前显示的文本
var words = ["欢迎回家!!", "你想前往哪里？", "贝阿朵莉切的黄金乡？", 
             "或者是命运石的beta世界线？", "华清大学的日常？", "还是过去的点滴回忆？"];
var index = 0; // 当前显示的字符串索引
var isAdding = true; // 是否正在添加字符
function op() {
    clearTimeout(timerId); // 清除之前的定时器
    var word = words[index]; // 当前要显示的字符串
    if (isAdding) {
        if (currentText.length === word.length) {
            isAdding = false;
        } else {
            currentText += word[currentText.length]; // 添加下一个字符
        }
    } else {
        if (currentText.length === 0) {
            isAdding = true;
            index = (index + 1) % words.length; // 切换到下一个字符串
            word = words[index]; // 更新当前字符串
        } else {
            currentText = currentText.substring(0, currentText.length - 1); // 移除最后一个字符
        }
    }
    document.getElementById("typist").innerText = currentText; // 更新显示的文本
    timerId = setTimeout(op, 100); // 设置下一个定时器
}

op(); // 初始化打字效果
