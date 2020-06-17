import initialState from "../state"
import Actions from "../actiontypes/Actions"


export function userReducer(state = initialState.userData, action) {

    let stateCopy = { ...state }
    switch (action.type) {

        case Actions.LOAD_USER_DATA:
            stateCopy.users = action.payLoad
            let arr = []
            for (let i = 0; i < action.payLoad.length; i++) {
                arr.push(0)
            }
            stateCopy.isEdit = [...arr];
            return stateCopy;

        case Actions.CHANGE_EDIT:

            let isEdit = [...stateCopy.isEdit];
            let length = isEdit.length;
            for (let i = 0; i < length; i++) {
                isEdit[i] = 0
            }
            isEdit[action.payLoad] = 1;
            stateCopy.isEdit = [...isEdit];
            return stateCopy;

        case Actions.CANCEL_EDIT:
            let cancelEdit = [...stateCopy.isEdit]
        
            for (let i = 0; i < cancelEdit.length ; i++) {
                cancelEdit[i] = 0
            }
            stateCopy.isEdit = [...cancelEdit];
            return stateCopy;

        case Actions.SEARCH_USER:
            stateCopy.users = action.payLoad
            let arrNew = []
            for (let i = 0; i < action.payLoad.length; i++) {
                arrNew.push(0)
            }
            stateCopy.isEdit = [...arrNew];
            return stateCopy;


        default:
            return stateCopy;
    }
}