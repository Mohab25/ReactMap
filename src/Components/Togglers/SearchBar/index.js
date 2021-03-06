import React,{Fragment,useState,useEffect} from 'react'
import {SearchContainer,LeafSearchBar,Matchcard} from './styles/styles'
import Data from '../../../Components/Map/Selected_Areas.geojsonl.json'
import {searchItem} from "../../../Actions/ActionsCreators/Selection/SearchClick";
import {useDispatch} from 'react-redux'


export default function Index() {
    let [cardmatches,setMatches] = useState([]); 

    const handleChange=(e)=>{
        let BlockList = Data.features; 
        console.log('Search',Data.features.properties)
        let matches = BlockList.filter(block=>{
            let regex = new RegExp(`^${e.target.value}`,'gi')
            return block.properties.PAU_NAME.match(regex)
        })
        if (e.target.value===''){
            matches=[]
        }
        showSearchResult(matches)
    }

    let showSearchResult=(matches)=>{
        console.log('matches',matches)
        setMatches(matches)
    }
    let dispatch = useDispatch()
    let card = cardmatches.map(match=>
        <div onClick={()=>{dispatch(searchItem(match.geometry.coordinates[0][0][0]))}}>
            <Matchcard className='card card-body mb-1'>
            <h6 className='text-primary' style={{fontFamily:'Cairo'}}>{match.properties.PAU_NAME}</h6>
            </Matchcard>
        </div>
        )
    return (

        <Fragment>
            <SearchContainer>
            <LeafSearchBar onChange={handleChange} placeholder='Search...' placeholderTextColor='green'></LeafSearchBar>
            {card}
            </SearchContainer>
        </Fragment>
    )
}
