const initialState = {
    clicked: false,
    clickedHotels: false,
    clickedRestaraunts: false,
    clickedEntertainment: false
};

export default function clickReducer(state=initialState, action){
    switch(action.type) {
        case 'HANDLE_CLICK':
            return{
                ...state,
                clicked: !state.clicked
            }

        case 'HANDLE_HOTELS':
            return {
                ...state,
                clickedHotels: !state.clickedHotels
            };
        
        case 'HANDLE_RESTARAUTS':
            return {
                ...state,
                clickedRestaraunts: !state.clickedRestaraunts,
            };

        case 'HANDLE_ENTERTAINMENT':
            return {
                ...state,
                clickedEntertainment: !state.clickedEntertainment
            }

        default:
            return state;
        }
    }