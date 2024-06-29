const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const RegisterController = require("../controllers/RegisterController");
const LoginController = require("../controllers/LoginController");
const ProductController = require("../controllers/ProductController");
const { validateProduct } = require("../utils/validators/product");
const { validateRegister, validateLogin } = require("../utils/validators/auth");

router.post("/register", validateRegister, RegisterController.register);
router.post("/login", validateLogin, LoginController.login);
router.get("/products", verifyToken, ProductController.getAllProducts);
router.post("/products", verifyToken, validateProduct, ProductController.createProduct);
router.get('/products/:id', verifyToken, ProductController.getProductById);
router.delete("/products/:id", verifyToken, ProductController.deleteProduct);

module.exports = router;
