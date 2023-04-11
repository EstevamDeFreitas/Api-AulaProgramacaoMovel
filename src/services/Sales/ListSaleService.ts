import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

class ListSaleService{
    async execute() {
        const saleRepository = getCustomRepository(SalesRepositories);

        const sales = await saleRepository.find();

        return sales;
    }
}

export{ListSaleService};