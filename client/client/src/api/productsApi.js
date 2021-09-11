import axiosClient from "./axiosApi";
const ProductApi = {
    getAll: (params)=>{
        const url = "/products";
      
        return axiosClient.get(url,{params});
    },
    updateProduct: (param)=>{
        const url= "/products/update";
        return axiosClient.post(url,param);
    },
    deleteProduct:(param)=>{
        const url= "/products/delete";
        return axiosClient.post(url,param);
    },
    addProduct:(param)=>{
        const url = "/products/add";
        return axiosClient.post(url,param);
    }
}
export default ProductApi;