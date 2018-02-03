import { applymiddleware, create} from 'redux';
import data from '../json/consult.json';

let consultationInitialState = {
    title:['','id','标题','分类','更新时间','作者','内容','状态','操作'],
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