import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class DeleteCategoryService {
  async execute(id: string) {
    const categoryRepository = getCustomRepository(CategoryRepositories);

    return await categoryRepository.delete(id);
  }
}

export { DeleteCategoryService };
