const express = require('express');
const actController = require("../../controllers/admin/activities.controller");

const router = express.Router();

router.get('/', actController.getActivities);
router.post('/', actController.addActivities);
router.patch('/', actController.updateActivities);
router.delete('/', actController.deleteActivities);

module.exports = router;