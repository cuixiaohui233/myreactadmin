import data from '../json/image.json';

let imageInitialState = {
    title:['','id','标题','封面','相册描述','更新时间','发布状态','操作'],
    data:data,
    power:[
        {name:'admin',type:'admin'},
        {name:'tourist',type:'tourist'}
    ],
    view:'all',
    info:[],
    page:1
};

function imageReducer(state = imageInitialState, action ){
    return state;
};

export {
    imageInitialState,
    imageReducer
};