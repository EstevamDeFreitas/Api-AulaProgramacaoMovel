import { Request, Response } from "express";
import { GetDeliveryService } from "../../services/Delivery/GetDeliveryService";

class GetDeliveryController {

    async handle(request: Request, response: Response) {
        const id= request.params.id;

        const deliveryService = new GetDeliveryService();

        const delivery = await deliveryService.execute(id);

        return response.json(delivery);
    }
}

export {GetDeliveryController};