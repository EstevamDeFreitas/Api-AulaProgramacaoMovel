import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

class GetProductService {
  async execute(id: string) {
    const productRepository = getCustomRepository(ProductRepositories);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }
}

export { GetProductService };
