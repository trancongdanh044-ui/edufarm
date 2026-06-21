const inforsPageModel = require("../../models/infors_page.model");

exports.getInforsPage = async(req, res, next) =>{
    try {
        const result = await inforsPageModel.getInforsPage();

        if(result === {} || result === null || result == undefined){
            return res.status(404).json({
                message: "Không tìm thấy thông tin !",
                result: result
            });
        }

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

exports.addInforsPage = async(req, res, next)=>{
    try {
        const {address, facebook, message, zalo, phone} = req.body;
        const result = await inforsPageModel.addInforsPage(address, facebook, message, zalo, phone);

        return res.status(201).json({
            message: "Thêm thông tin thành công !",
            result: result
        });
    } catch (error) {
        next(error);
    }
}

exports.updateInforsPage = async(req, res, next) =>{
    try {
        const {id, address, facebook, message, zalo, phone} = req.body;
        const result = await inforsPageModel.updateInforsPage(id, address, facebook, message, zalo, phone);

        return res.status(201).json({
            message: "Cập nhât thông tin thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteInforPage = async (req, res, next) =>{
    try {
        const {id} = req.body;
        const result = await inforsPageModel.deleteInforPage(id);

        return res.status(201).json({
            message: "Xoá thông tin thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}