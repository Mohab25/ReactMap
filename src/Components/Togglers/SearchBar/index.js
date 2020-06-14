import React,{Fragment} from 'react'
import {LeafSearchBar} from './styles/styles'
export default function index() {
    return (
        <Fragment>
            <LeafSearchBar placeholder='Search...' placeholderTextColor='green'></LeafSearchBar>
        </Fragment>
    )
}
