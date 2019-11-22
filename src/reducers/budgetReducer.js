const initialState = {
    overBudget: false 
}


export default function budget(state=initialState, action){
    switch(action.type) {
        case 'OVER_BUDGET':
            return {
                ...state,
                overBudget: action.overload.overBudget
            }
        
        default:
            return state;
    }
}