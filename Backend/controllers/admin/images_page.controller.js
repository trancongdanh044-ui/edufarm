const imgPageModel = require('../../models/imagesPage.model');

exports.getImagePage = async (req, res, next) =>{
    try {
        
        const type = req.query.type || null;

        const limit = req.query.limit ? Number(req.query.limit) : null

        const imgPageList = await imgPageModel.getImagePage(type, limit);

        if(imgPageList.length === 0){
            return res.status(400).json({
                message: "Không tìm thấy ảnh !",
            })
        }

        return res.status(200).json(imgPageList);
    } catch (error) {
        next(error);
    }
} 

exports.getImagePageById = async (req, res, next) =>{
    try {
        const {img_id} = req.params;
        const imgId = await imgPageModel.getAllImagesPageById(img_id);

        if(imgId === null || imgId === ""){
            return res.status(404).json({
                message: "Không tìm thấy ảnh !",

            });
        }

        return res.status(200).json(imgId);
    } catch (error) {
        next(error);
    }
}

exports.addImagePage = async (req, res, next) => {
    try {
        const {type, image_url} = req.body;
        const result = await imgPageModel.addImagesPage(type, image_url);

        if(result === null){
            return res.status(400).json({
                message: "Không thêm được ảnh !",
            });
        }

        return res.status(200).json({
            message: "Thêm ảnh thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}

exports.updateImagePage = async(req, res, next) =>{
    try {
        const {id, image_url} = req.body;
        const result = await imgPageModel.updateImagesPage(id, image_url);

        return res.status(200).json({
            message: "Cập nhật ảnh thành công !",
            result: result
        });
    } catch (error) {
        next(error);
    }
}

exports.deleteImagePage = async(req, res, next) =>{
    try {
        const {id} = req.body;
        const result = imgPageModel.deleteImagePage(id);

        return res.status(200).json({
            message: "Xoá ảnh thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}