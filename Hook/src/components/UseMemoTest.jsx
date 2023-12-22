import React, { useState, useMemo } from "react";

export function UseMemoTest() {
    const [count, setCount] = useState(0);

    // 假设这是一个计算成本较高的函数
    const expensiveComputation = (num) => {
        console.log('Computing...');
        return num * 2; // 示例：简单的乘以2
    };

    // 使用useMemo缓存计算结果
    const computedValue = useMemo(() => expensiveComputation(count), [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Computed Value: {computedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
