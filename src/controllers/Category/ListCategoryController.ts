import { Request, Response } from "express";
import { ListCategoryService } from "../../services/Category/ListCategoryService";

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const categoryService = new ListCategoryService();

    const category = await categoryService.execute();

    return response.json(category);
  }
}

export { ListCategoryController };
