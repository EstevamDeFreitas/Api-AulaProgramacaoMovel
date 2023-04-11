import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ISaleRequest {
    productId : string;
    userId : string;
    total : number;
    desc : string;
    obs ?: string;
}

class CreateSaleService{
    async execute(sale : ISaleRequest) {
        const saleRepository = getCustomRepository(SalesRepositories);

        const saleCreate = saleRepository.create(sale);

        await saleRepository.save(saleCreate);

        return saleCreate;
    }
}

export {CreateSaleService};
