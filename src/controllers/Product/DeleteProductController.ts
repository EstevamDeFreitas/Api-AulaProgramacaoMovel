import { Request, Response } from "express";
import { DeleteProductService } from "../../services/Product/DeleteProductService";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const productService = new DeleteProductService();

    const product = await productService.execute(id);

    return response.json(product);
  }
}

export { DeleteProductController };
