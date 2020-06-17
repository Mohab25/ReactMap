import React,{Component} from 'react'
import json_data from '../../Obied.geojsonl.json'
import {GeoJSON} from 'react-leaflet'
import {connect} from 'react-redux'
import {colorChanger} from '../../../../Actions/ActionsCreators/LayerColorChangeForClassComponent'

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            PolyFillColor:'grey',
            GeojsonKey:1
        }
    }

    componentDidUpdate(prevProps){
        if(this.props!=prevProps){
        let key = this.state.GeojsonKey;
        key++;     
        this.setState({PolyFillColor:this.props.color,GeojsonKey:key});
    }
    }
    render(){
        return(
        <GeoJSON key={this.state.GeojsonKey} data={json_data} style={{color:'none',fillColor:this.state.PolyFillColor}}/>                
        )
    }
} 

const mapStateToProps=(state)=>({
    color:state.LayerColors.fillColor
})

export default connect(mapStateToProps,{colorChanger})(Index); 