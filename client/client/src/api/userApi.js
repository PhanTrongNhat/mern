import axiosClient from "./axiosApi";
const userApi = {
  getAll: (param) => {
    const url = "/user";
    return axiosClient.get(url);
  },
  postUser:(data)=>{
    const url = "/login";
    return axiosClient.post(url,data)
  }
};
export default userApi;
