// export function RX(state = [], action) {
//   switch (action.type) {
//     case 'SAVE_RX':
//       // return the new state with the new comment
//       return [...state, {
//         OD: action.OD, 
//         OS: action.OS, 
//         PD: action.PD,
//         RXname: action.RXname,
//         add: action.add
//       }];
//     case 'REMOVE_RX':
//       // we need to return the new state without the deleted comment
//       return [
//         // from the start to the one we want to delete
//         ...state.slice(0, action.i),
//         // after the deleted one, to the end
//         ...state.slice(action.i + 1)
//       ]
//     default:
//       return state;
//   }
// }

// export function RX(state = [], action) {
//   if (typeof action.RXname !== 'undefined') {
//     return {
//       // take the current state
//       ...state,
//       // overwrite this post with a new one
//       [action.postId]: addOrder(state[action.postId], action)
//     }
//   }
//   return state;
// }

// export function RX(state = [], action) {
//   switch (action.type) {
//     case 'SAVE_RX':
//       // return the new state with the new comment
//       return [...state, {
//         OD: action.OD, 
//         OS: action.OS, 
//         PD: action.PD,
//         RXname: action.RXname,
//         add: action.add
//       }];
//     case 'REMOVE_RX':
//       // we need to return the new state without the deleted comment
//       return [
//         // from the start to the one we want to delete
//         ...state.slice(0, action.i),
//         // after the deleted one, to the end
//         ...state.slice(action.i + 1)
//       ]
//     default:
//       return state;
//   }
// }

export function RXs(state = [], action) {
  switch (action.type) {
    case 'SET_RXS':
      return action.RXs;
    default:
      return state;
  }
}