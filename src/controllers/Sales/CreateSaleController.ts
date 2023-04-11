import { Request, Response } from "express";
import { CreateSaleService } from "../../services/Sales/CreateSaleService";

class CreateSaleController {

    async handle(request: Request, response: Response) {
        const sale : {productId : string; userId : string; total : number; desc : string; obs ?: string;} = request.body;

        const createSaleService = new CreateSaleService();

        const saleGenerated = await createSaleService.execute(sale);

        return response.json(saleGenerated);
    }
}

export {CreateSaleController};