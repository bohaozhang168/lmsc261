// Astronaut 2 - 宇航服寿命检查

// 定义函数 checkLifeSpan，参数 hoursUsed 表示已使用小时数
function checkLifeSpan(hoursUsed) 
{
    const maxLifeSpan = 1000;// 常量：宇航服最大寿命 1000 小时

    // 检查参数是否为有效数字

    if (typeof hoursUsed !== 'number' || isNaN(hoursUsed)) 
        {
        return "please enter valid number"; // 无效数字时返回提示
    }

    // 根据使用小时数返回对应消息
    if (hoursUsed < 800) 
        {
        return "suit in working condition"; 
    } 
    else if (hoursUsed < maxLifeSpan) 
        { 
        return "suit needs replacement soon"; 
    } 
    else {
        return "suit no longer safe to use"; // 超过或等于寿命，不再安全
    }
}