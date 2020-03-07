import axios from "axios";

export function getRXs(){
    return(dispatch)=>{
        return axios.get("http://localhost:5001/robertson-optometry/us-central1/api/RXs").then((response)=>{
            dispatch(loadRX(response.data));
        })
    }
}

export function setRXs(RX){
    return{
        type:"SET_RXS",
        RXs
    }
}


export function postRX({ ODSPH, ODCLY, ODAXIS, OSSPH, OSCLY, OSAXIS, PD, ODPD, OSPD, ODadd, OSadd, ODPrismHor, ODPrismHorDirection, ODPrismVert, ODPrismVertDirection, OSPrismHor, OSPrismHorDirection, OSPrismVert, OSPrismVertDirection, PrismOD, PrismOS, RXname }) {
  return (dispatch) => {
    return axios.post("http://localhost:5001/robertson-optometry/us-central1/api/RXs", { ODSPH, ODCLY, ODAXIS, OSSPH, OSCLY, OSAXIS, PD, ODPD, OSPD, ODadd, OSadd, ODPrismHor, ODPrismHorDirection, ODPrismVert, ODPrismVertDirection, OSPrismHor, OSPrismHorDirection, OSPrismVert, OSPrismVertDirection, PrismOD, PrismOS, RXname })
      .then(response => {
        dispatch(saveRX(response.data))
      })
      .catch(error => {
        console.log("error posting order", error);
      });
  };
};

export function saveRX(data) {
  return {
    type: "SAVE_RX",
    ODSPH: data.ODSPH,
    ODCLY: data.ODCLY,
    ODAXIS: data.ODAXIS,
    OSSPH: data.OSSPH,
    OSCLY: data.OSCLY,
    OSAXIS: data.OSAXIS,
    PD: data.PD,
    ODPD: data.ODPD,
    OSPD: data.OSPD,
    ODadd: data.ODadd,
    OSadd: data.OSadd,
    ODPrismHor: data.ODPrismHor,
    ODPrismHorDirection: data.ODPrismHorDirection,
    ODPrismVert: data.ODPrismVert,
    ODPrismVertDirection: data.ODPrismVertDirection,
    OSPrismHor: data.OSPrismHor,
    OSPrismHorDirection: data.OSPrismHorDirection,
    OSPrismVert: data.OSPrismVert,
    OSPrismVertDirection: data.OSPrismVertDirection,
    PrismOD: data.PrismOD,
    PrismOS: data.PrismOS,
    RXname: data.RXname
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

