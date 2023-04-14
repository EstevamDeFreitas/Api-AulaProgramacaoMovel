import { Request, Response } from "express";
import { CreateProductService } from "../../services/Product/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const product: {
      productName: string;
      description: string;
      price: number;
      url: string;
    } = request.body;

    const createProductService = new CreateProductService();

    const productCreated = await createProductService.execute(product);

    return response.json(productCreated);
  }
}

export { CreateProductController };
