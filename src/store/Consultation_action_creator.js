import { ConsulttationConstants } from '../constants/consultation_constants';

let consultActionCreator = {
    saveChange:function(newData){
        console.log(newData)
        return {
            type:ConsulttationConstants.CONSULT_SAVE_CHANGE,
            newData:newData
        }
    },
    changeTitle:function(newData){
        return {
            type:ConsulttationConstants.CHANGE_TITLE,
            data:newData
        }
    },
    deleteChange:function(newData){
        console.log(newData)
        return {
            type:ConsulttationConstants.DELETE_TITLE,
            data:newData
        }
    }
};

export { consultActionCreator };