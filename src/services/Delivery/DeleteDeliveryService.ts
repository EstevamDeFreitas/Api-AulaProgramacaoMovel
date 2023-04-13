import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

class DeleteDeliveryService {
    async execute(id: string) {
      const deliveryRepository = getCustomRepository(DeliveriesRepositories);
  
      return await deliveryRepository.delete(id);
    }
  }
  
  export { DeleteDeliveryService };