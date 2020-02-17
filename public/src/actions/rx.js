import axios from "axios";

export function getRX(){
    return(dispatch)=>{
        return axios.get("http://localhost:5001/robertson-optometry/us-central1/api/").then((response)=>{
            dispatch(loadRX(response.data));
        })
    }
}

export function loadRX(RX){
  console.log(RX)
    return{
        type:"LOAD_RX",
        RX
    }
}

export function postRX(){
  return(dispatch)=>{
      return axios.get("http://localhost:5001/robertson-optometry/us-central1/api/").then((response)=>{
          dispatch(loadRX(response.data));
      })
  }
}

export function setRXState(ODSPH, ODCLY, ODAXIS, OSSPH, OSCLY, OSAXIS, PD, ODPD, OSPD, ODadd, OSadd, ODPrismHor, ODPrismHorDirection, ODPrismVert, ODPrismVertDirection, OSPrismHor, OSPrismHorDirection, OSPrismVert, OSPrismVertDirection, PrismOD, PrismOS, RXname) {
  return {
    type: "SAVE_RX",
    ODSPH,
    ODCLY,
    ODAXIS,
    OSSPH,
    OSCLY,
    OSAXIS,
    PD,
    ODPD,
    OSPD,
    ODadd,
    OSadd,
    ODPrismHor,
    ODPrismHorDirection,
    ODPrismVert,
    ODPrismVertDirection,
    OSPrismHor,
    OSPrismHorDirection,
    OSPrismVert,
    OSPrismVertDirection,
    PrismOD,
    PrismOS,
    RXname
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
