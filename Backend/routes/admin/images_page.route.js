const express = require('express');
const imgPageController = require("../../controllers/admin/images_page.controller");

const router = express.Router();

router.get('/admin', imgPageController.getImagePage);
router.get('/admin/:img_id', imgPageController.getImagePageById);
router.post('/admin', imgPageController.addImagePage);
router.patch('/admin', imgPageController.updateImagePage);
router.delete('/admin', imgPageController.deleteImagePage);

module.exports = router;