import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

interface ICategoryRequest {
  id: string;
  categoryId: string;
  categoryName: string;
}

class UpdateCategoryService {
  async execute(category: ICategoryRequest) {
    const categoryRepository = getCustomRepository(CategoryRepositories);

    let categoryFound = await categoryRepository.findOne(category.id);

    if (!categoryFound) {
      throw new Error("Category not found");
    }

    categoryFound.categoryId = category.categoryId;
    categoryFound.categoryName = category.categoryName;
    categoryFound.updated_at = new Date();

    return await categoryRepository.update(category.id, categoryFound);
  }
}

export { UpdateCategoryService };
