// 参数化花朵绘制函数
function drawFlower(p5, x, y, size, petalCount, globalAngle) {
    // 确保花瓣数量至少为1
    petalCount = Math.max(1, Math.floor(petalCount));

    let heartRadius = size * 0.2;       // 花心半径（相对于 size）
    let petalRadius = size * 0.16;      // 花瓣半径
    let petalDistance = size * 0.3;     // 花瓣中心到花心的距离

    // 绘制花心
    p5.noStroke();
    p5.fill(255, 204, 0);
    p5.circle(x, y, heartRadius * 2);

    // 绘制花瓣
    for (let i = 0; i < petalCount; i++) {
        let baseAngle = (p5.TWO_PI / petalCount) * i;
        let angle = baseAngle + globalAngle;

        // 花瓣中心位置
        let xPos = x + p5.cos(angle) * petalDistance;
        let yPos = y + p5.sin(angle) * petalDistance;

        p5.push();
        p5.translate(xPos, yPos);
        p5.rotate(angle);   // 使花瓣朝向径向外侧

        p5.noStroke();
        p5.fill(255, 100, 150);   // 给花瓣加个颜色
        // 绘制半圆花瓣（PIE 扇形）
        p5.arc(0, 0, petalRadius * 2.5, petalRadius * 2, -p5.HALF_PI, p5.HALF_PI, p5.PIE);

        p5.pop();
    }
}

const drawing = p5 => {
    p5.setup = () => {
        p5.createCanvas(600, 600);
    };

    p5.draw = () => {
        p5.background(30);

        // 让花瓣数量和旋转速度来自鼠标（可继续使用）
        let petalCount = p5.constrain(p5.mouseX / 20, 1, 20);
        let globalAngle = p5.frameCount * 0.02 * p5.mouseY;

        // 循环绘制多个花朵
        let cols = 3;
        let rows = 3;
        let spacingX = p5.width / (cols + 1);
        let spacingY = p5.height / (rows + 1);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = spacingX * (i + 1);
                let y = spacingY * (j + 1);
                let size = p5.width * 0.25;          // 每个花朵的大小

                drawFlower(p5, x, y, size, petalCount, globalAngle);
            }
        }
    };
};

new p5(drawing);