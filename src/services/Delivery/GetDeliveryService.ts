import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

class GetDeliveryService{
    async execute(id : string) {
        const deliveryRepository = getCustomRepository(DeliveriesRepositories);

        const delivery = await deliveryRepository.findOne(id);

        if (!delivery) {
            throw new Error("delivery not exists")
        }

        return delivery;
    }
}

export{GetDeliveryService};