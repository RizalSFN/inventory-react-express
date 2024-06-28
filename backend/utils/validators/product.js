const { body } = require("express-validator");
const prisma = require("../../prisma/client");

const validateProduct = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .custom(async (value) => {
      if (!value) throw new Error("Name is required");

      const product = await prisma.product.findUnique({
        where: {
          name: value,
        },
      });

      if (product) throw new Error("Product name already exists");

      return true;
    }),
  body("stock").notEmpty().withMessage("Stock is required"),
];

module.exports = validateProduct;
