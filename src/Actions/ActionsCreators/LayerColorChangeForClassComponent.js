import { FillColorChange } from "../types";
import { useSelector } from "react-redux";
export const colorChanger=()=>dispatch=>{
    const color = useSelector(state=>state.LayerColors.fillColor); 
    dispatch({
        type:FillColorChange,
        payload:color
    })
}
