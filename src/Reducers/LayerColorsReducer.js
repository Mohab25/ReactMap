import {FillColorChange} from '../Actions/types'

const State = {fillColor:'grey'};

export default function LayerColorReducer(state=State,action){
    switch(action.type){
        case FillColorChange:return{
            ...state,
            fillColor:action.payload
        }
        default:return(state)
    }
}