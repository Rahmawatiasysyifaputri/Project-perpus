const {
    controllerAddPetugas,
    controllerUpdatePetugas

} = require("./petugas.controller");

const router = require("express").Router();

router.post("/", controllerAddPetugas);
router.patch("/:id", controllerUpdatePetugas);

module.exports = router;