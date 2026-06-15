const userModel = require("../../models/user.model");

exports.getAdminInforById = async (req, res, next) =>{
    try{
        const {id} = req.user;
        const adminInfor = await userModel.getAdminInforById(id);

        if(!adminInfor){
            res.status(404).json({
                message: "Người dùng không tồn tại !"
            })
        }else{
            res.status(200).json(adminInfor);
        }

    }catch(error){
        next(error)
    }
}

exports.getCustomerInforById = async (req, res, next) =>{
    try{
        const {id} = req.user;
        const customerInfor = await userModel.getCustomerInforById(id);

        if(!customerInfor){
            res.status(404).json({
                message: "Người dùng không tồn tại !"
            })
        }else{
            res.status(200).json(customerInfor);
        }

    }catch(error){
        next(error)
    }
}
