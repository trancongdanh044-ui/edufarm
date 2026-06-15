const express = require("express");

const authController = require("../controllers/auth/auth.controller");

const {verifyToken, roleMiddleware} = require("../middlewares/auth.middleware");

const router = express.Router();

//Lấy admin đang login
router.get("/admin/me", verifyToken, roleMiddleware("admin"), authController.getAdminInforById);

//Lấy customer đang login
router.get("/customer/me", verifyToken, roleMiddleware("customer"), authController.getCustomerInforById);

module.exports = router;
