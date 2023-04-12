import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

interface ICategoryRequest {
  categoryId: string;
  categoryName: string;
}

class CreateCategoryService {
  async execute(category: ICategoryRequest) {
    const categoryRepository = getCustomRepository(CategoryRepositories);

    const categoryCreate = categoryRepository.create(category);

    await categoryRepository.save(categoryCreate);

    return categoryCreate;
  }
}

export { CreateCategoryService };
