const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_TODO = 'ADD_TODO'
const REMOVE_LAST_TODO = 'REMOVE_LAST_TODO'

type StateType = {
    count: number,
    todos: Array<string>
}

const initialState: StateType = {
    count: 0,
    todos: ['video', 'music', 'toolkit']
}

export const mainReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case REMOVE_LAST_TODO:
            return {
                ...state,
                todos: [...state.todos.splice(0, state.todos.length-1)]
            }
        default:
            return state
    }
}

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const addTodo = () => ({type: ADD_TODO})
export const removeLastTodo = () => ({type: REMOVE_LAST_TODO})