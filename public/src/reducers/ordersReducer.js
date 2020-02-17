export function orders(state = [], action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, {
        dateOrdered: action.dateOrdered, 
        orderStatus: action.orderStatus, 
        totalCost: action.totalCost, 
        userId: action.userId,
        RX: action.RX,
        lensType: action.lensType,
        lensMaterial: action.lensMaterial,
        lensOptions: action.lensOptions,
        lensUpgrades: action.lensUpgrades
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

export function lensOptions(state = [], action) {
  switch (action.type) {
    case 'CHOOSE_LENS_OPTIONS':
      [...state, {
        lensOptions: action.lensOptions
      }]
    default:
      return state;
  }
}

export function lensMaterial(state = '', action) {
  switch (action.type) {
    case 'CHOOSE_LENS_MATERIAL':
    return action.lensMaterial;
    default:
      return state;
  }
}

export function lensType(state = '', action) {
  switch (action.type) {
    case 'CHOOSE_LENS_TYPE':
    return action.lensType;
    default:
      return state;
  }
}

export function lensUpgrades(state = [], action) {
  switch (action.type) {
    case 'CHOOSE_LENS_UPGRADES':
      [...state, {
        lensUpgrades: action.lensUpgrades
      }]
    default:
      return state;
  }
}