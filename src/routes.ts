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

import { ListCategoryService } from "./services/Category/ListCategoryService";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { UpdateCategoryController } from "./controllers/Category/UpdateCategoryController";
import { DeleteCategoryController } from "./controllers/Category/DeleteCategoryController";
import { GetCategoryController } from "./controllers/Category/GetCategoryController";

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

const listCategoryController = new ListCategoryController();
const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();
const getCategoryController = new GetCategoryController();

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

router.get("/category", listCategoryController.handle);
router.post("/category", createCategoryController.handle);
router.put("/category", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);
router.get("/category/:id", getCategoryController.handle);

export {router}