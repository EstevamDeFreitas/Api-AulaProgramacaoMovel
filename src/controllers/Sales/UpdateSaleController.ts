import { Request, Response } from "express";
import { UpdateSaleService } from "../../services/Sales/UpdateSaleService";

class UpdateSaleController {

    async handle(request: Request, response: Response) {
        const sale : {id: string; productId : string; userId : string; total : number; desc : string; obs : string;} = request.body;

        const saleService = new UpdateSaleService();

        const sales = await saleService.execute(sale);

        return response.json(sales);
    }
}

export {UpdateSaleController};