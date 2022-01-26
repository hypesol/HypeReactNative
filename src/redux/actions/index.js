// when you will have to return single line
//export const incNumber = () => { type: 'INCREMENT' }
// OR

export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}

