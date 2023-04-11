import { Request, Response } from "express";
import { DeleteSaleService } from "../../services/Sales/DeleteSaleService";

class DeleteSaleController {

    async handle(request: Request, response: Response) {
        const id= request.params.id;

        const saleService = new DeleteSaleService();

        const sales = await saleService.execute(id);

        return response.json(sales);
    }
}

export {DeleteSaleController};