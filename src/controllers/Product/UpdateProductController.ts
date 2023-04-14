import { Request, Response } from "express";
import { UpdateProductService } from "../../services/Product/UpdateProductService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const product: {
      id:string;
      productName: string;
      description: string;
      price: number;
      url: string;
    } = request.body;

    const productService = new UpdateProductService();

    const products = await productService.execute(product);

    return response.json(products);
  }
}

export { UpdateProductController };
