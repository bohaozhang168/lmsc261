const drawing = p5 => {
    p5.setup = () => {
        p5.createCanvas(600, 600); // 创建画布
    }

    p5.draw = () => {
        p5.background(30);

        // 计算相对尺寸和位置
        let centerX = p5.width * 0.5;
        let centerY = p5.height * 0.5;
        let heartRadius = p5.width * 0.1;      // 花心半径
        let petalRadius = p5.width * 0.08;      // 花瓣半径（半圆的半径）
        let petalDistance = p5.width * 0.15;      // 花瓣中心到花心的距离
        let petalCount = p5.mouseX / 20;                       // 花瓣数量
        let globalAngle = p5.frameCount * 0.02 * p5.mouseY;   // 旋转速度

        // 绘制花心（实心圆）
        p5.noStroke();
        p5.fill(255, 204, 0);
        p5.circle(centerX, centerY, heartRadius * 2);

        // 花瓣
        for (let i = 0; i < petalCount; i++) {

            let baseAngle = (p5.TWO_PI / petalCount) * i;
            // 加上全局旋转角度，使花瓣绕花心旋转
            let angle = baseAngle + globalAngle;

            // 花瓣中心坐标（从花心偏移）
            let xPos = centerX + p5.cos(angle) * petalDistance;
            let yPos = centerY + p5.sin(angle) * petalDistance;

            // 保存当前绘图状态
            p5.push();

            // 将原点移到花瓣中心，并旋转使局部 x 轴指向径向向外
            p5.translate(xPos, yPos);
            p5.rotate(angle); // 旋转后，x轴正方向指向远离花心的方向


            // 绘制半圆花瓣（填充扇形）
            // 圆心在局部坐标 (0,0)，半径 petalRadius，从 -PI/2 到 PI/2 形成朝右的半圆
            p5.noStroke(); 
            p5.arc(0,
                 0,
                petalRadius * 5, 
                petalRadius * 2, 
                -p5.HALF_PI, 
                p5.HALF_PI, 
                p5.PIE); // PIE 模式绘制填充扇形

            p5.pop(); // 恢复绘图状态
        }
    }
}

// 启动 p5 实例
new p5(drawing);
