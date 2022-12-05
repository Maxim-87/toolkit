import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState: StateType = {
    count: 0,
    todos: ['video-toolkit', 'music', 'toolkit']
}

type StateType = {
    count: number,
    todos: Array<string>
}

export const increment = createAction<number, 'INCREMENT'>('INCREMENT')
export const decrement = createAction<number, 'DECREMENT'>('DECREMENT')

export default createReducer
(initialState, {
    [increment.type]: function (state: StateType) {
        state.count = state.count + 1
    },

    [decrement.type]: function (state: StateType) {
        state.count = state.count - 1
    }
})