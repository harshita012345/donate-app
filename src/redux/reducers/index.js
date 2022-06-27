import { combineReducers } from 'redux';
import { becomeCreateReducer, sliderGetReducer, volunteerGetReducer } from './rootReducer';


export default combineReducers({
    volunteer: volunteerGetReducer,
    becomeCreate: becomeCreateReducer,
    getSlider: sliderGetReducer
});
