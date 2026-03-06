// 这是一个仅使用圆形的代码艺术程序
// 通过嵌套循环创建网格，并根据行列索引的奇偶性改变圆圈的样式

const drawing = p5 => {
    p5.setup = () => { // 设置函数，程序启动时运行一次
        p5.createCanvas(600, 600); // 创建 600x600 的画布
    }

    p5.draw = () => { 
        p5.background(0, 200, 0); 

        // 定义网格的行数和列数
        let rows = 5;
        let cols = 5;

        // 计算间距，使网格居中并留出边距
        let spacing = p5.width / (cols + 1); // 左右各留一个间距单位的边距
        let baseSize = 30;

        // 外层循环遍历行
        for (let row = 0; row < rows; row++) 
            {
            // 内层循环遍历列
            for (let col = 0; col < cols; col++) 
                {
                let x = (col + 1) * spacing; // 列索引从0开始，加1以留出左边距
                let y = (row + 1) * spacing; // 行索引从0开始，加1以留出上边距

                // 使用条件语句判断行列索引之和的奇偶性
                if ((row + col) % 2 === 0) 
                    {
                    // 绘制较大的红色圆，带有黑色边框
                    p5.fill(255, 0, 0);
                    p5.strokeWeight(2);
                    p5.circle(x, y, baseSize * 1.5);
                } else {
                    // 奇数位置：
                    // 绘制较小的蓝色圆，无边框
                    p5.fill(0, 0, 255);
                    p5.noStroke();
                    p5.circle(x, y, baseSize);
                }
            }
        }
    }
}

// 创建 p5 实例，启动程序
new p5(drawing);
