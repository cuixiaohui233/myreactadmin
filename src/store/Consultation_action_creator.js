import { ConsulttationConstants } from '../constants/consultation_constants';

let consultActionCreator = {
    saveChange:function(newData){
        return {
            type:ConsulttationConstants.CONSULT_SAVE_CHANGE,
            newData:newData
        }
    }
};

export { consultActionCreator };