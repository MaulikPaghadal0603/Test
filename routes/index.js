const router = require("express").Router();

//! Auth Router
router.use("/api/v1/auth", require("./Auth.js"));

//! Owner Router
router.use("/api/v1/owner", require("./Owner.js"));

//! Upload Router
router.use("/api/v1/upload", require("./Upload.js"));

module.exports = router;
