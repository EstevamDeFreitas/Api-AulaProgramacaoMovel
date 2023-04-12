import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const category: { categoryId: string; categoryName: string } = request.body;

    const createCategoryService = new CreateCategoryService();

    const categoryCreated = await createCategoryService.execute(category);

    return response.json(categoryCreated);
  }
}

export { CreateCategoryController };
