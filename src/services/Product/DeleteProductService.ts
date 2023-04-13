import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

class DeleteProductService {
  async execute(id: string) {
    const productRepository = getCustomRepository(ProductRepositories);

    return await productRepository.delete(id);
  }
}

export { DeleteProductService };
