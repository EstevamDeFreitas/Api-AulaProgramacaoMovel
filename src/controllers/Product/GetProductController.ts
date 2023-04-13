import { Request, Response } from "express";
import { GetProductService } from "../../services/Product/GetProductService";

class GetProductController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const productService = new GetProductService();

    const product = await productService.execute(id);

    return response.json(product);
  }
}

export { GetProductController };
