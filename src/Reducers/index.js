import {combineReducers} from 'redux';
import LayerColorsReducers from './LayerColorsReducer';

export default combineReducers({
    LayerColors: LayerColorsReducers
})