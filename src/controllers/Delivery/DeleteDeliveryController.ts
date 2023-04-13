import { Request, Response } from "express";
import { DeleteSaleService } from "../../services/Sales/DeleteSaleService";
import { DeleteDeliveryService } from "../../services/Delivery/DeleteDeliveryService";

class DeleteDeliveryController {

    async handle(request: Request, response: Response) {
        const id= request.params.id;

        const deliveryService = new DeleteDeliveryService();

        const delivery = await deliveryService.execute(id);

        return response.json(delivery);
    }
}

export {DeleteDeliveryController};