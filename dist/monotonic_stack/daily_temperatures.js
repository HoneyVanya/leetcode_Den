// 739. Daily Temperatures
function dailyTemperatures(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let stackI = stack.pop();
            result[stackI] = (i - stackI);
        }
        stack.push(i);
    }
    return result;
}
;
