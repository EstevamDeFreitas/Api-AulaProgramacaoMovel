import { Request, Response } from "express";
import { ListProductService } from "../../services/Product/ListProductService";

class ListProductController {
  async handle(request: Request, response: Response) {
    const productService = new ListProductService();

    const product = await productService.execute();

    return response.json(product);
  }
}

export { ListProductController };
