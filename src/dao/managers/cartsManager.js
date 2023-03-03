import { cartsModel } from "../models/carts.model.js";

export default class CartsManager {
  async getCart() {
    try {
      return await cartsModel.find();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async addProductToCart(product) {
    try {
      return await cartsModel.create(product);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteProductFromCart(id) {
    try {
      return await cartsModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteAllProductsFromCart() {
    try {
      return await cartsModel.deleteMany();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}