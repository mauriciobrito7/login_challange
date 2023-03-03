import { ProductsModel } from "../models/products.model.js";

export default class ProductsManager {
 async getProducts() {
  try {
   return await ProductsModel.find();
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async getProductById(id) {
  try {
   return await ProductsModel.findById(id);
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async addProduct(product) {
  try {
   return await ProductsModel.create(product);
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async updateProduct(id, product) {
  try {
   return await ProductsModel.findByIdAndUpdate(id, product);
  } catch (error) {
   console.log(error);
   return error;
  }
 }

 async deleteProduct(id) {
  try {
   return await ProductsModel.findByIdAndDelete(id);
  } catch (error) {
   console.log(error);
   return error;
  }
 }
}
