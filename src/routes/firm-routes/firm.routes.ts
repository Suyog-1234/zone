import {Router} from "express";
import { FirmRegister } from "../../controllers/firm-controllers/firm-register.controller";

const router = Router();

router.route("/register").post(FirmRegister);

export default router