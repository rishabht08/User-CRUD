import axios from "axios";


export const getUsers= async () => {
    return axios.get("http://localhost:6060/user/get").then(res => {
        return res;

    })

}

export const addUser= async (data) => {
    return axios.post("http://localhost:6060/user/create" , data).then(res => {
        return res;

    })

}

export const updateUser= async (id , data) => {
    return axios.patch(`http://localhost:6060/user/update/${id}` , data).then(res => {
        return res;

    })

}


export const deleteUser= async (id) => {
    return axios.delete(`http://localhost:6060/user/delete/${id}`).then(res => {
        return res;

    })

}


export const searchUser= async (query) => {
    return axios.get(`http://localhost:6060/user/get/from?query=${query}`).then(res => {
        return res;

    })

}
