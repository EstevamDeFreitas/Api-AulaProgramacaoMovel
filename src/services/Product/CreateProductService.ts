import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

interface IProductRequest {
  productName: string;
  description: string;
  price: number;
  url: string;
}

class CreateProductService {
  async execute(product: IProductRequest) {
    const productRepository = getCustomRepository(ProductRepositories);

    const productCreate = productRepository.create(product);

    await productRepository.save(productCreate);

    return productCreate;
  }
}

export { CreateProductService };
