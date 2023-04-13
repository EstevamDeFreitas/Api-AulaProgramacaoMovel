import { Request, Response } from "express";
import { ListDeliveryService } from "../../services/Delivery/ListDeliveryService";

class ListDeliveryController {

    async handle(request: Request, response: Response) {
        const deliveryService = new ListDeliveryService();

        const delivery = await deliveryService.execute();

        return response.json(delivery);
    }
}

export {ListDeliveryController};