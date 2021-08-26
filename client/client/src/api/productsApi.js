import axiosClient from "./axiosApi";
const ProductApi = {
    getAll: ()=>{
        const url = "/products";
        return axiosClient.get(url);
    },
    updateProduct: (param)=>{
        const url= "/products/update";
        return axiosClient.post(url,param);
    },
    deleteProduct:(param)=>{
        const url= "/products/delete";
        return axiosClient.post(url,param);
    },
}
export default ProductApi;