//actions get dispatched but doesn't update state in store need reducer, every reducer will run at every dispatch
import axios from "axios";

export function changeOrderStep(orderStep) {
  return {
    type: "CHANGE_ORDER_STEP",
    orderStep
  }
}

export function postOrder({ userId, OD, OS, PD, RXname, add, lensType, lensMaterial, lensOptions, lensUpgrades }) {
  return (dispatch) => {
    return axios.post("http://localhost:5001/robertson-optometry/us-central1/api", { userId, OD, OS, PD, RXname, add, lensType, lensMaterial, lensOptions, lensUpgrades })
      .then(response => {
        dispatch(addOrder(response.data))
      })
      .catch(error => {
        console.log("error posting order", error);
      });
  };
};

export function addOrder(data) {
  return {
    type: "ADD_ORDER",
    payload: {
      _id: data._id,
      userId: data.userId,
      OD: data.OD,
      OS: data.OS,
      PD: data.PD,
      RXname: data.RXname,
      add: data.add,
      lensType: data.lensType,
      lensMaterial: data.lensMaterial,
      lensOptions: data.lensOptions,
      lensUpgrades: data.lensUpgrades
    }
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
