$(function() {
    //棋盘初始化
    init()
});

var board = new Array();
function init() {
    //i表示4乘4的格子中的行
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        //j表示4乘4的格子中的列
        for (var j = 0; j < 4; j++) {
            //将每个格子的值初始化为0
            board[i][j] = 0;
            //通过双重遍历获取每个格子元素
            var gridCell = $("#grid-cell-" + i + "-" + j);
            //通过getPosTop()方法设置每个格子距顶端的距离
            gridCell.css("top", getPosTop(i, j));
            //通过getPosLeft()方法设置每个格子距左端的距离
            gridCell.css("left", getPosLeft(i, j));
        }
    }
}

function getPosTop(i, j) {
    return 20 + i * 180;
}

function getPosLeft(i, j) {
    return 20 + j * 180;
}