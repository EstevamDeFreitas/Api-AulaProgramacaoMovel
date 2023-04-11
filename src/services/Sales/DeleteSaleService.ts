import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

class DeleteSaleService{
    async execute(id : string){
        const saleRepository = getCustomRepository(SalesRepositories);

        return await saleRepository.delete(id);
    }
}

export {DeleteSaleService};