const express = require("express");
const Joi = require("joi");

const {
  OwnerAdd,
  OwnersGet,
  OwnerGet,
  OwnerUpdate,
  OwnerDelete,
} = require("../controllers/OwnerController.js");

const validateRequest = require("../middleware/validate-request.js");

const { authMiddleware, logout } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.post("/owner-add", AddValidation, OwnerAdd);
router.get("/owners-get", authMiddleware, OwnersGet);
router.get("/owner-get/:id", authMiddleware, OwnerGet);
router.put(
  "/owner-update/:id",
  authMiddleware,
  UpdateValidation,
  OwnerUpdate
);
router.delete("/owner-delete/:id", authMiddleware, OwnerDelete);

function AddValidation(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(6).max(255).required(),
    phoneNumber: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999)
      .required(),
  });
  validateRequest(req, res, next, schema);
}

function UpdateValidation(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).optional(),
    email: Joi.string().email({ minDomainSegments: 2 }).optional(),
    phoneNumber: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999)
      .optional(),
  });
  validateRequest(req, res, next, schema);
}

module.exports = router;
