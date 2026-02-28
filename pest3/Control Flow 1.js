// Ice Cream Shop 1
const priceOfIceCream = 5; // 冰激凌价格，单位：美元（价格不变）

let paymentRecieved = prompt("please enter amount:"); // 获取用户输入的金额
paymentRecieved = Number(paymentRecieved); // 将字符串转换为数字（确保比较正确）

let isPaymentEnough = paymentRecieved >= priceOfIceCream; // 布尔值：是否足够支付

if (isPaymentEnough) {
    let change = paymentRecieved - priceOfIceCream; // 计算找零

    print("Thanks! Enjoy the Ice Cream!" );
} else {
    print("Not enough cash!"); 
}