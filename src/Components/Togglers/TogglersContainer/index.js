import React,{Fragment} from 'react'
import {LeafTogglersContainer,LeafMapToggler,LeafSearchBar} from './styles/styles'
import DataToggler from '../DataToggler/index'
import MapToggler from '../MapToggler/index'
import SearBar from '../SearchBar/index' 
export default function index() {
    return (
        <Fragment>
            <LeafTogglersContainer>
                <SearBar/>
                <MapToggler/>
                <DataToggler/>
            </LeafTogglersContainer>
        </Fragment>
    )
}
