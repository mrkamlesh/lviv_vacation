const initialState = {
    items: [],
    error: null,
    userItems: [],
    filterItems: [],
    price: 0,
    budget: 0
};

export default function dataReducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_BASKET_PRICE':
          return {
            ...state,
            price: state.price + action.payload.price
          };

        case 'MINUS_BASKET_PRICE':
          return {
            ...state,
            price: state.price - action.payload.price
          };

        case 'SHOW_BUDGET':
            return {
              ...state,
              budget: action.payload.budget
            };

        case 'FETCH_DATA_FAILURE':
          return {
            ...state,
            error: action.payload.error,
            items: []
          };

        case 'FETCH_DATA_SUCCESS':
          return {
            ...state,
            items: action.payload.posts,
            filterItems: [ ...action.payload.posts]
          };

        case 'FETCH_USER_CHOICE':
          return {
            ...state,
            userItems: action.payload.choice
          };

        case 'ADD_USER_CHOICE':
          return {
            ...state,
            userItems: [...state.userItems, action.payload.choice]
          };
        
        case 'DELETE_USER_CHOICE':
            return {
              ...state,
              userItems: state.userItems.filter(item => item.id !== action.payload.id)
            };

        
 case 'FILTER_ITEMS':
  return {
      ...state,
      filterItems: [ ...state.items.filter((item) => {
        let ObjCheck;
          if(action.value.clickedHotels) {
            ObjCheck = {
              "Hotel": action.value.checkedItems.checkHotel,
              "Flat": action.value.checkedItems.checkFlat,
              "Motel": action.value.checkedItems.checkMotel,
              "Hostel": action.value.checkedItems.checkHostel
            }        
          } else if(action.value.clickedRestaraunts) {
            ObjCheck = {
              "Restaurant": action.value.checkedItems.checkHotel,
              "Pub": action.value.checkedItems.checkFlat,
              "Cafe": action.value.checkedItems.checkMotel,
              "Snack-bar": action.value.checkedItems.checkHostel
            }        
          } else if(action.value.clickedEntertainment) {
            ObjCheck = {
              "Cinema": action.value.checkedItems.checkHotel,
              "Passive Rest": action.value.checkedItems.checkFlat,
              "Theatre": action.value.checkedItems.checkMotel,
              "Active Rest": action.value.checkedItems.checkHostel
            }       
          }
                                                                 
              if(ObjCheck[item.whatIsIt]) {
                  return item;
              } else if(action.value.checkedItems.checkAll) {
                return item;
              } else if(!action.value.checkedItems.checkFlat 
                && !action.value.checkedItems.checkHostel
                && !action.value.checkedItems.checkHotel 
                && !action.value.checkedItems.checkMotel) {
                  return item;
              }          
             return "" ;
          })  ]
  };
          
        case 'FILTER_BY_PRICE':
           let funcSort;
           if(action.value.checkByDecrease) {
            funcSort = (a, b) => b.price - a.price;            
           } else if(action.value.checkByIncrease) {
            funcSort = (a, b) => a.price - b.price;
           }

          return {
            ...state,
            filterItems: [...state.filterItems.sort(funcSort)]
          }

        default:
          return state;
    }
}