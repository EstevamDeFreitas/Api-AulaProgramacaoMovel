import { Request, Response } from "express";
import { GetSaleService } from "../../services/Sales/GetSaleService";

class GetSaleController {

    async handle(request: Request, response: Response) {
        const id= request.params.id;

        const saleService = new GetSaleService();

        const sale = await saleService.execute(id);

        return response.json(sale);
    }
}

export {GetSaleController};