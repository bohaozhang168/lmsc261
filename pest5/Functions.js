// Astronaut 1 - 随机活动选择

// 定义函数 pickRandomActivity，返回随机活动字符串
function pickRandomActivity() {
    // 常量数组，存储可能的每日活动
    const dailyActivities = [
        "Clean Solar Panel",
        "Video Chat with Houston",
        "Hydrate Space Food", 
        "Take Earth Picture",
        "Learn Russian",
        "Check Life Support Systems"
    ];

    // 生成随机索引：Math.random() 返回 [0,1) 之间的随机数
    let randomIndex = Math.floor(Math.random() * dailyActivities.length);

    // 根据随机索引获取对应的活动
    let randomActivity = dailyActivities[randomIndex];

    return randomActivity; // 返回活动字符串
}
print("Today's activity is: " + pickRandomActivity());

