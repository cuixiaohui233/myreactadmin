import { applymiddleware, create} from 'redux';
import thunk from 'redux-thunk';

let consultationInitialState = {
    title:['','id','标题','分类','更新时间','作者','内容','发布状态','操作'],
    data:[],
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