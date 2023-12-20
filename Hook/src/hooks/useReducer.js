import {useState} from "react";

//     function reducer(state,action) {
//         switch (action.type) {
//             case 'increase':
//                 return state + 1
//             case 'decrease':
//                 if (state === 0) {
//                     return 0
//                 }
//                 return state - 1
//             default:
//                 return state
//         }
//     }
/**
 * 通用的useReducer函数
 * @param reducer reducer函数 标准格式
 * @param initialState 初始状态
 * @param initFunc 用于初始化state的函数
 * @returns {(*|dispatch)[]}
 */
function useReducer(reducer, initialState, initFunc) {
    const [state, setState] = useState(initFunc? initFunc(initialState):initialState);


    function dispatch(action) {
        const newState = reducer(state,action)
        console.log('n:',`${state} -> ${state}`)
        setState(newState)
    }

    return [n,dispatch]
}
