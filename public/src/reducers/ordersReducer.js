export function orders(state = [], action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, {
        dateOrdered: action.dateOrdered,
        orderId: action.orderID,
        orderStatus: action.orderStatus,
        totalCost: action.totalCost
      }];
    case 'REMOVE_ORDER':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
}

// function orders(state = [], action) {
//   if (typeof action.postId !== 'undefined') {
//     return {
//       // take the current state
//       ...state,
//       // overwrite this post with a new one
//       [action.postId]: postOrder(state[action.postId], action)
//     }
//   }
//   return state;
// }

export function orderStep(state = 1, action) {
  switch (action.type) {
    case 'CHANGE_ORDER_STEP':
      return action.orderStep;
    default:
      return state;
  }
}

export function RX(state = [], action) {
  switch (action.type) {
    case 'SAVE_RX':
      // return the new state with the new comment
      return [...state, {
        OD: action.OD, 
        OS: action.OS, 
        PD: action.PD,
        RXname: action.RXname,
        add: action.add
      }];
    case 'REMOVE_RX':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
}
