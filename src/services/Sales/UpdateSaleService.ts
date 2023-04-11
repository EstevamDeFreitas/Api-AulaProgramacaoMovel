import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

interface ISaleRequest {
    id:string;
    productId : string;
    userId : string;
    total : number;
    desc : string;
    obs : string;
}

class UpdateSaleService{
    async execute(sale : ISaleRequest){
        const saleRepository = getCustomRepository(SalesRepositories);

        let saleFound = await saleRepository.findOne(sale.id);

        if (!saleFound) {
            throw new Error("Sale not exists")
        }

        saleFound.desc = sale.desc;
        saleFound.obs = sale.obs;
        saleFound.productId = sale.productId;
        saleFound.total = sale.total;
        saleFound.userId = sale.userId;
        saleFound.updated_at = new Date();

        return await saleRepository.update(sale.id, saleFound);
    }   
}

export {UpdateSaleService};