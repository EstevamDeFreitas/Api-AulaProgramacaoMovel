import { Request, Response } from "express";
import { ListSaleService } from "../../services/Sales/ListSaleService";

class ListSaleController {

    async handle(request: Request, response: Response) {
        const saleService = new ListSaleService();

        const sales = await saleService.execute();

        return response.json(sales);
    }
}

export {ListSaleController};