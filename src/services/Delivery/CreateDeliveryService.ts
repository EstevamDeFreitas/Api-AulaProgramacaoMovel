import { getCustomRepository } from "typeorm";
import { DeliveriesRepositories } from "../../repositories/DeliveriesRepositories";

interface IDeliveryRequest {
    saleId: string;
    dt_entrega: Date;
    obs : string;

  }
  
  class CreateDeliveryService {
    async execute(delivery: IDeliveryRequest) {
      const deliveryRepository = getCustomRepository(DeliveriesRepositories);
  
      const deliveryCreate = deliveryRepository.create(delivery);
  
      await deliveryRepository.save(deliveryCreate);
  
      return deliveryCreate;
    }
  }
  
  export { CreateDeliveryService };