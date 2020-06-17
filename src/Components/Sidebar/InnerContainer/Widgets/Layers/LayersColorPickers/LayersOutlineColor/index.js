import React,{Fragment,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {SidebarInnerColorOutlinePickerContainer,SidebarInnerOulineColorPickerText,
SidebarInnerOutlineColorPickerDiv} from './styles/styles'
import {ColorPalette,ColorPickedContainer,ColorPicked} from '../LayerContentColor/styles/styles'


export default function Index() {
    const [Renderer,setRenderer] = useState(''); 
    const [colorSet1] = useState(['white','black','grey'])[0]; 
    const [colorSet2] = useState(['green','blue','red'])[0];
    const fillColor = useSelector(state=>state.LayerColors.fillColor); 
    const dispatch = useDispatch();

    let colorPalette=()=>{
        if(Renderer===''){
        setRenderer('Color Palete');
        }
        else{
            setRenderer('')
        }
    }


    if(Renderer===''){

    return (
        <Fragment>
        <SidebarInnerColorOutlinePickerContainer>    
            <SidebarInnerOulineColorPickerText>Outline color</SidebarInnerOulineColorPickerText>
            <SidebarInnerOutlineColorPickerDiv></SidebarInnerOutlineColorPickerDiv>
        </SidebarInnerColorOutlinePickerContainer>
        </Fragment>
    )
}

else {
    return(
        <Fragment>

        </Fragment>
    )
}
}