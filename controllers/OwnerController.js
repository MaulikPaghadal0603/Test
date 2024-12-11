const Owner = require("../models/Owner");
const bcryptjs = require("bcryptjs");

const OwnerAdd = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const findOwner = await Owner.findOne({ email });
    if (findOwner) {
      return res.status(400).json({
        success: false,
        message:
          "This email has already been used. Please use a different email address.",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const restaurantOwner = new Owner({
      ...req.body,
      createdBy: name,
      password: hashedPassword,
    });

    await restaurantOwner.save();
    res.status(201).json({ success: true, data: restaurantOwner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const OwnersGet = async (req, res) => {
  try {
    const findOwner = await Owner.find()
    res.status(200).json({ success: true, data: findOwner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const OwnerGet = async (req, res) => {
  try {
    const { id } = req.params;
    const findOwner = await Owner.findById(id)
    if (!findOwner) {
      return res.status(400).json({
        success: false,
        message: "The Owner ID data does not exist.",
      });
    }

    res.status(200).json({ success: true, data: findOwner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const OwnerUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const existingOwner = await Owner.findById(id);
    if (!existingOwner) {
      return res.status(400).json({
        success: false,
        message: "The Owner ID data does not exist.",
      });
    }
    const updatedOwner = await Owner.findByIdAndUpdate(
      id,
      {
        ...req.body,
        lastModifiedBy: name || existingOwner.name,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: updatedOwner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const OwnerDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const findOwner = await Owner.findByIdAndDelete(id);
    if (!findOwner) {
      return res.status(400).json({
        success: false,
        message: "The Owner ID data does not exist.",
      });
    }
    res.status(200).json({ success: true, data: "Owner Delete" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  OwnerAdd,
  OwnersGet,
  OwnerGet,
  OwnerUpdate,
  OwnerDelete,
};
