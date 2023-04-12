import { Request, Response } from "express";
import { GetCategoryService } from "../../services/Category/GetCategoryService";

class GetCategoryController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const categoryService = new GetCategoryService();

    const category = await categoryService.execute(id);

    return response.json(category);
  }
}

export { GetCategoryController };
