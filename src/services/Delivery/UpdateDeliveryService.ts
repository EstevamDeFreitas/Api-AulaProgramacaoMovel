import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

interface IDeliveryRequest {
    saleId: string;
    dt_entrega: Date;
    obs : string;

  }

class UpdateDeliveryService{
    async execute(sale : IDeliveryRequest){
        const deliveryRepository = getCustomRepository(DeliveriesRepositories);

        let deliveryFound = await deliveryRepository.findOne(sale.saleId);

        if (!deliveryFound) {
            throw new Error("Sale not exists")
        }

        deliveryFound.obs = sale.obs;
        deliveryFound.updated_at = new Date();
        deliveryFound.dt_entrega = sale.dt_entrega;

        return await deliveryRepository.update(sale.saleId, deliveryFound);
    }   
}

export {UpdateDeliveryService};