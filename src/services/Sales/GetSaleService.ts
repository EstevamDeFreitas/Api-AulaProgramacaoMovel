import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

class GetSaleService{
    async execute(id : string) {
        const saleRepository = getCustomRepository(SalesRepositories);

        const sale = await saleRepository.findOne(id);

        if (!sale) {
            throw new Error("Sale not exists")
        }

        return sale;
    }
}

export{GetSaleService};