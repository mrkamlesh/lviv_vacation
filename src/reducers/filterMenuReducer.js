import { ACTION_CHECK_ALL, ACTION_CHECK_HOTEL, ACTION_CHECK_MOTEL,
    ACTION_CHECK_HOSTEL, ACTION_CHECK_FLAT,  } from '../actions/actionFilterMenu';
const initialState = {
    checkAll: false,
    checkHotel: false,
    checkMotel: false,
    checkHostel: false,
    checkFlat: false,
    checkByIncrease: false,
    checkByDecrease: false
};

function checkingItems(state, checkOne, checkTwo, checkThree, action, newCheck) {
    if(checkOne && checkTwo && checkThree && action.payload) {
        return {...state,
            [newCheck]: action.payload,
            checkAll: action.payload
           }
    } else if(checkOne && checkTwo && checkThree && action.payload !== true) {
        return { ...state,
            [newCheck]: action.payload,
            checkAll: action.payload
        }
    } else {
        return {...state, [newCheck]: action.payload }
    }
}
    
const reducerFilterMenu = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_CHECK_ALL:
            return { ...state, checkAll: action.payload,
                        checkHotel: action.payload,
                        checkFlat: action.payload,
                        checkMotel: action.payload,
                        checkHostel: action.payload
                    }
        case ACTION_CHECK_HOTEL:
            return checkingItems(state, state.checkMotel, state.checkHostel, state.checkFlat, action, 'checkHotel');
        case ACTION_CHECK_MOTEL:
            return checkingItems(state, state.checkHotel, state.checkHostel, state.checkFlat, action, 'checkMotel');
            
        case ACTION_CHECK_HOSTEL:
            return checkingItems(state, state.checkHotel, state.checkMotel, state.checkFlat, action, 'checkHostel');
        case ACTION_CHECK_FLAT:
            return checkingItems(state, state.checkHotel, state.checkMotel, state.checkHostel, action, 'checkFlat');
        case "ACTION_CHECK_BY_iNCREASE": 
        if(state.checkByDecrease) {
            return { ...state, checkByIncrease: !state.checkByIncrease,  checkByDecrease: !state.checkByDecrease}
        } else {
            return { ...state, checkByIncrease: !state.checkByIncrease}
        }
        case "ACTION_CHECK_BY_DECREASE": {
            if(state.checkByIncrease) {
                return { ...state, checkByDecrease: !state.checkByDecrease,  checkByIncrease: !state.checkByIncrease}
            }
                return { ...state, checkByDecrease: !state.checkByDecrease }
        }

        default:
            return state;
    }
};

export default reducerFilterMenu;

