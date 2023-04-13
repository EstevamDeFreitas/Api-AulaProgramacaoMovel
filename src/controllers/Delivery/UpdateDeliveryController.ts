import { Request, Response } from "express";
import { UpdateDeliveryService } from "../../services/Delivery/UpdateDeliveryService";

class UpdateDeliveryController {

    async handle(request: Request, response: Response) {
        const delivery : {
            saleId: string;
            dt_entrega: Date;
            obs : string;
        } = request.body;

        const deliveryService = new UpdateDeliveryService();

        const deliveries = await deliveryService.execute(delivery);

        return response.json(deliveries);
    }
}

export {UpdateDeliveryController};