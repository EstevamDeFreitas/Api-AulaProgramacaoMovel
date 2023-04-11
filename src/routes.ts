import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController} from "./controllers/UpdateUserController";
import { DeleteUserController} from "./controllers/DeleteUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated} from "./midleware/ensureAuthenticated";
import { ensureAdmin} from "./midleware/ensureAdmin";
import { ListSaleService } from "./services/Sales/ListSaleService";
import { ListSaleController } from "./controllers/Sales/ListSaleController";
import { CreateSaleController } from "./controllers/Sales/CreateSaleController";
import { UpdateSaleController } from "./controllers/Sales/UpdateSaleController";
import { DeleteSaleController } from "./controllers/Sales/DeleteSaleController";
import { GetSaleController } from "./controllers/Sales/GetSaleController";

const autenticationUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const listSaleController = new ListSaleController();
const createSaleController = new CreateSaleController();
const deleteSaleController = new DeleteSaleController();
const updateSaleController = new UpdateSaleController();
const getSaleController = new GetSaleController();

const router = Router();

router.post("/login", autenticationUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated)
router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);
router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);

router.get("/sales", listSaleController.handle);
router.post("/sales", createSaleController.handle);
router.put("/sales", updateSaleController.handle);
router.delete("/sales/:id", deleteSaleController.handle);
router.get("/sales/:id", getSaleController.handle);

export {router}