import * as Api from "../../api/userApi"
import Actions from "../actiontypes/Actions"


const formatData = (type, data) => {
    return {
        type,
        payLoad: data
    }
}




export const getUsers = () => {
    return dispatch => {
        return Api.getUsers().then(res => {
            return dispatch(formatData(Actions.LOAD_USER_DATA , res.data))
       
        })

    }
}

export const addUser = (data) => {
    return dispatch => {
        return Api.addUser(data).then(res => {
            return res.data;
       
        })

    }
}

export const goToEdit = (index) => {
    return dispatch => {
       
        return dispatch(formatData(Actions.CHANGE_EDIT , index))
       
    }
}

export const cancelEdit = () => {
    return dispatch => {
        return dispatch(formatData(Actions.CANCEL_EDIT , null))
       
    }
}

export const updateUser = (id , data) => {
    return dispatch => {
        return Api.updateUser(id , data).then(res => {
            return res
       
        })

    }
}

export const deleteUser = (id) => {
    return dispatch => {
        return Api.deleteUser(id).then(res => {
            return res
       
        })

    }
}

export const searchUser = (query) => {
    return dispatch => {
        return Api.searchUser(query).then(res => {
            return dispatch(formatData(Actions.SEARCH_USER , res.data.data))
       
        })

    }
}
