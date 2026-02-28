// Ice Cream Shop 2

const conesSoldPerHour = 3; 
const inventory = 36;

// 使用 for 循环从第 1 小时到第 12 小时
for (let hour = 1; hour <= 12; hour++) {
    let sold = conesSoldPerHour * hour; // 当前小时累计销量
    print(sold + " sold at hour " + hour); // 输出销量

    let remaining = inventory - sold;
    print(remaining + " left");
}