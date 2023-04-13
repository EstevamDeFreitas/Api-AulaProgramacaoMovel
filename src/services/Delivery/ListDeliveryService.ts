import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

class ListDeliveryService{
    async execute() {
        const deliveryRepository = getCustomRepository(DeliveriesRepositories);

        const delivery = await deliveryRepository.find();

        return delivery;
    }
}

export{ListDeliveryService};