import data from '../json/consult.json';
import { ConsulttationConstants } from '../constants/consultation_constants';

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

    switch(action.type){
        // case ConsulttationConstants.CONSULT_SAVE_CHANGE:
        //     console.log(action.data)
        //     return Object.assign({}, state, {
        //         data:action.newData
        //     });
        case ConsulttationConstants.CHANGE_TITLE:
            return Object.assign({}, state, {
                data:action.data
            });
    }
    return state;
};

export {
    consultationInitialState,
    consultationReducer
};