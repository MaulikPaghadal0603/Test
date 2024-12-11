const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
        },
        resetPasswordExpires: {
            type: Date,
        },
        resetPasswordToken: {
            type: String,
        },
        isActive: {
            type: Number,
            default: 1,
            enum: [0, 1],
        },
        createdBy: {
            type: String,
            required: true,
        },
        lastModifiedBy: {
            type: String,
        },
    },
    { timestamps: true }
);

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
