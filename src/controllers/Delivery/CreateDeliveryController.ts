import { Request, Response } from "express";
import { CreateDeliveryService } from "../../services/Delivery/CreateDeliveryService";

class CreateDeliveryController {

    async handle(request: Request, response: Response) {
        const delivery : {
            saleId: string;
            dt_entrega: Date;
            obs : string;
        } = request.body;

        const createDeliveryService = new CreateDeliveryService();

        const deliveryGenerated = await createDeliveryService.execute(delivery);

        return response.json(deliveryGenerated);
    }
}

export {CreateDeliveryController};