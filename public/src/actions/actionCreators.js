//actions get dispatched but doesn't update state in store need reducer, every reducer will run at every dispatch
export function addOrder(userId, OD, OS, PD, RXname, add) {
  return {
    type: "ADD_ORDER",
    //these 5 things are payload
    userId,
    OD,
    OS,
    PD,
    RXname,
    add
  }
}
export function removeOrder(userId, orderId, i) {
  return {
    type: "REMOVE_ORDER",
    userId,
    orderId,
    i
  }
}

export function saveRX(userId, OD, OS, PD, RXname, add) {
  return {
    type: "SAVE_RX",
    userId,
    OD,
    OS,
    PD,
    RXname,
    add
  }
}

export function removeRX(userId, RXname, i) {
  return {
    type: "REMOVE_RX",
    userId,
    RXname,
    i
  }
}
