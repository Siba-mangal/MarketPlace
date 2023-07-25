import { axiosInstance } from "./axiosinstance";

//add product

export const AddProduct = async (payload) => {
  try {
    console.log(payload);
    const response = await axiosInstance.post(
      "./api/products/add-product",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//get all products

export const GetProducts = async () => {
  try {
    const response = await axiosInstance.get("/api/products/get-products");
    return response.data;
  } catch (error) {
    return error.message;
  }
};
