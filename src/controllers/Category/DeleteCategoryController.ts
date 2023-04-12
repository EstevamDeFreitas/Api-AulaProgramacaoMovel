import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/Category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const categoryService = new DeleteCategoryService();

    const category = await categoryService.execute(id);

    return response.json(category);
  }
}

export { DeleteCategoryController };
