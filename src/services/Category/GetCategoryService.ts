import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class GetCategoryService {
  async execute(id: string) {
    const categoryRepository = getCustomRepository(CategoryRepositories);

    const category = await categoryRepository.findOne(id);

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
}

export { GetCategoryService };
