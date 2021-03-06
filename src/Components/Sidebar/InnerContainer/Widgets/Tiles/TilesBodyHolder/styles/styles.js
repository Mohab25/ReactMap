import styled from 'styled-components'

export const TilesBodyHolder = styled.div`
    width:90%; 
    height:${props=>props.height}px; 
    background-color:#2f2f2f; 
    margin-left:-2%;
    display:flex; 
    flex-direction:column; 
    justify-content:flex-start ; 
    align-items:flex-start; 
    align-content:space-evenly; 
    overflow:${props=>props.overFlow};
    transition:1s; 
`

export const TilesNameHolder = styled.div`
    width:100%; 
    background-color:#1f1f1f; 
    padding:10px; 
    display:flex;  
    flex-direction:row; 
    justify-content:space-between; 
    cursor:pointer; 
`

export const TilesName = styled.p`
    color:white;
`

export const TilesToggleIcon =styled.p`     
    color:white;
`