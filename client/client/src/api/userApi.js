import axiosClient from "./axiosApi";
const userApi = {
  getAll: (param) => {
    const url = "/user";
    return axiosClient.get(url);
  },
};
export default userApi;
