function ordersReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ORDER':
      // return the new state with the new ORDER
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

export default ordersReducer;