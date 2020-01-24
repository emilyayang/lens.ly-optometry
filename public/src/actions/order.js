//actions get dispatched but doesn't update state in store need reducer, every reducer will run at every dispatch
export function addOrder(userId, OD, OS, PD, RXname, add, lensType, lensUsage, lensMaterial, lensOptions, lensUpgrades) {
  return {
    type: "ADD_ORDER",
    userId,
    OD,
    OS,
    PD,
    RXname,
    add, 
    lensType, 
    lensUsage, 
    lensMaterial, 
    lensOptions, 
    lensUpgrades
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
