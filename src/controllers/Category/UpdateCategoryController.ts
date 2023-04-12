import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/Category/UpdateCategoryService";

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const category: { id: string; categoryId: string; categoryName: string } = request.body;

    const categoryService = new UpdateCategoryService();

    const categorys = await categoryService.execute(category);

    return response.json(categorys);
  }
}

export { UpdateCategoryController };
