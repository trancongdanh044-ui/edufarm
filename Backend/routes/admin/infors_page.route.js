const express = require('express');
const inforsPageController = require("../../controllers/admin/infors_page.controller");

const router = express.Router();

router.get('/', inforsPageController.getInforsPage);
router.post('/', inforsPageController.addInforsPage);
router.patch('/', inforsPageController.updateInforsPage);
router.delete('/', inforsPageController.deleteInforPage);

module.exports = router;