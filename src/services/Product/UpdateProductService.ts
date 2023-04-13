import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

interface IProductRequest {
  id: string;
  productId: string;
  productName: string;
  description: string;
  price: number;
  url: string;
}

class UpdateProductService {
  async execute(product: IProductRequest) {
    const productRepository = getCustomRepository(ProductRepositories);

    let productFound = await productRepository.findOne(product.id);

    if (!productFound) {
      throw new Error("Product not found");
    }

    productFound.productId = product.productId;
    productFound.productName = product.productName;
    productFound.description = product.description;
    productFound.price = product.price;
    productFound.url = product.url;
    productFound.updated_at = new Date();

    return await productRepository.update(product.id, productFound);
  }
}

export { UpdateProductService };
