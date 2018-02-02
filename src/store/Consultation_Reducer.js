import { applymiddleware, create} from 'redux';
import data from '../json/consult.json';

let consultationInitialState = {
    title:['','id','title','item','time','author','content','status','todo'],
    data:data,
    power:[
        {name:'admin',type:'admin'},
        {name:'tourist',type:'tourist'}
    ],
    view:'all',
    info:[],
    page:1,
};

function consultationReducer(state = consultationInitialState, action ){

    return state;
};

export {
    consultationInitialState,
    consultationReducer
};