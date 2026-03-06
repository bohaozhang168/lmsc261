// 这是一个仅使用圆形的代码艺术程序
// 通过嵌套循环创建网格，并根据行列索引的奇偶性改变圆圈的样式

const drawing = p5 => {
    p5.setup = () => { // 设置函数，程序启动时运行一次
        p5.createCanvas(600, 600); // 创建 600x600 的画布
    }

    p5.draw = () => { // 绘制函数，持续循环执行
        p5.background(240); // 设置浅灰色背景

        // 定义网格的行数和列数
        let rows = 5;
        let cols = 5;

        // 计算间距，使网格居中并留出边距
        let spacing = p5.width / (cols + 1); // 左右各留一个间距单位的边距
        let baseSize = 30; // 基础圆直径

        // 外层循环遍历行
        for (let row = 0; row < rows; row++) {
            // 内层循环遍历列
            for (let col = 0; col < cols; col++) {
                // 计算当前圆的位置
                let x = (col + 1) * spacing; // 列索引从0开始，加1以留出左边距
                let y = (row + 1) * spacing; // 行索引从0开始，加1以留出上边距

                // 使用条件语句判断行列索引之和的奇偶性
                if ((row + col) % 2 === 0) {
                    // 偶数位置（和能被2整除）：
                    // 绘制较大的红色圆，带有黑色边框
                    p5.fill(255, 0, 0); // 填充红色
                    p5.stroke(0);        // 边框黑色
                    p5.strokeWeight(2);  // 边框粗细为2像素
                    p5.circle(x, y, baseSize * 1.5); // 直径为基础尺寸的1.5倍
                } else {
                    // 奇数位置：
                    // 绘制较小的蓝色圆，无边框
                    p5.fill(0, 0, 255); // 填充蓝色
                    p5.noStroke();       // 无边框
                    p5.circle(x, y, baseSize); // 直径为基础尺寸
                }
            }
        }

        // 可选：在画布底部显示提示文字（仅为了增加趣味）
        p5.fill(0);
        p5.noStroke();
        p5.textSize(16);
        p5.text("红圈大 + 边框 | 蓝圈小 + 无边框", 20, p5.height - 30);
    }
}

// 创建 p5 实例，启动程序
new p5(drawing);