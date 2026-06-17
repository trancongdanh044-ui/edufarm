const actModel = require('../../models/activities.model');

exports.getActivities = async (req, res, next) =>{
    try {
        const limit = req.query.limit ? Number(req.query.limit) : null;
        const offset = req.query.offset ? Number(req.query.offset) : null;

        const actList = await actModel.getActivites(limit, offset);
        if(actList.length === 0){
            return res.status(404).json({
                message: "Không tìm thấy hoạt động nào !",
            });
        }
        return res.status(200).json(actList);

    } catch (error) {
        next(error);
    }
}

exports.addActivities = async (req, res, next) =>{
    try {
        const {name, description, image_url, duration_minutes} = req.body;
        const result = await actModel.addActivities(name, description, image_url, duration_minutes);

        return res.status(200).json({
            message: "Thêm hoạt động thành công",
            result: result
        });

    } catch (error) {
        next(error);
    }
}

exports.updateActivities = async (req, res, next) =>{
    try {
        const {act_id, name, description, image_url, duration_minutes} = req.body;
        const result = await actModel.updateActivities(Number(act_id), name, description, image_url, duration_minutes);

        return res.status(201).json({
            message: "Sửa hoạt động thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteActivities = async(req, res, next) =>{
    try {
        const act_id = req.body.act_id ? Number(req.body.act_id) : null;
        const result = await actModel.deleteActivites(act_id);

        return res.status(200).json({
            message: "Xoá hoạt động thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}