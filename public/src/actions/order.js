//actions get dispatched but doesn't update state in store need reducer, every reducer will run at every dispatch
import axios from "axios";

export function incrementOrderStep() {
  return {
    type: "INCREMENT_ORDER_STEP",
  }
}
export function decrementOrderStep() {
  return {
    type: "DECREMENT_ORDER_STEP",
  }
}

// export function incrementOrderStep() {
//   if (orderStep >= 1 && orderStep <= 4) {
//     return {
//       type: "INCREMENT_ORDER_STEP",
//     }
//   } else {
//     return {
//       type: "SAME_ORDER_STEP",

//     }
//   }
// }

// export function decrementOrderStep() {
//   if (orderStep >= 2 && orderStep <= 5) {
//     return {
//       type: "DECREMENT_ORDER_STEP",
//     }
//   } else {
//     return {
//       type: "SAME_ORDER_STEP",

//     }
//   }
// }

// export function updateUserOrders({ dateOrdered, orderId, orderStatus, totalCost }) {
//   return {
//     type: "UPDATE_USER_ORDER",
//     orderStep
//   }
// }

export function deleteOrder(userId, orderId, i) {
  // return (dispatch) => {
  //   return axios.DELETE("http://localhost:5001/robertson-optometry/us-central1/api", { dateOrdered, orderStatus, totalCost, userId, RX, lensType, lensMaterial, lensOptions, lensUpgrades })
  //     .then(response => {
  //       dispatch(addOrder(response.data))
  //     })
  //     .catch(error => {
  //       console.log("error posting order", error);
  //     });
  // };
}
export function removeOrder(userId, orderId, i) {
  return {
    type: "REMOVE_ORDER",
    userId,
    orderId,
    i
  }
}

export function postOrder({ userId, RX, lensType, lensMaterial, lensOptions, lensUpgrades }) {
  let dateOrdered = Date.now();
  let orderStatus = "Processing";
  let totalCost = "$$$";
  return (dispatch) => {
    return axios.post("http://localhost:5001/robertson-optometry/us-central1/api", { dateOrdered, orderStatus, totalCost, userId, RX, lensType, lensMaterial, lensOptions, lensUpgrades })
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
      dateOrdered: data.dateOrdered,
      orderStatus: data.orderStatus,
      totalCost: data.totalCost,
      userId: data.userId,
      RX: data.RX,
      lensType: data.lensType,
      lensMaterial: data.lensMaterial,
      lensOptions: data.lensOptions,
      lensUpgrades: data.lensUpgrades
    }
  }
}



export function handleChooseLensOptions() {
  return {
    type: "CHOOSE_LENS_OPTIONS",
    lensOptions: e.target.id
  }
}

export function handleChooseLensMaterial(lensMaterial) {
  return {
    type: "CHOOSE_LENS_MATERIAL",
    lensMaterial
  }
}

export function handleChooseLensType(lensType) {
  return {
    type: "CHOOSE_LENS_TYPE",
    lensType
  }
}

export function handleChooseLensUpgrades(lensUpgrades) {
  return {
    type: "CHOOSE_LENS_UPGRADES",
    lensUpgrades
  }
}
