const postModel = require("../../models/post.model");

const convertToArray = (img_urls) =>{
    return img_urls ? img_urls.split(",") : [];
}

exports.getAllAdminPosts = async(req, res, next) =>{
    try{
        const {limit, offset} = req.query;
        const adminPostsList = await postModel.getAllPostsOfAdmin(Number(limit), Number(offset));

        if(adminPostsList.length === 0){
            return res.status(404).json({
                message: "Không tìm thấy bài viết"
            })
        }
        else{
            adminPostsList.forEach(post => {
                post.img_urls = convertToArray(post.img_urls);
            });
            return res.status(200).json(adminPostsList);
        }
    }catch(error){
        next(error);
    }
}

exports.getAllAdminPostsById = async(req, res, next) =>{
    try {
        const {admin_id} = req.params;
        const {limit, offset} = req.query;
        const adIdPostList = await postModel.getAllPostsOfAdminById(Number(admin_id), Number(limit), Number(offset));

        if(adIdPostList.length === 0){
            return res.status(404).json({
                message: "Không tìm thấy bài viết !",
            })
        }else{
            adIdPostList.forEach(post =>{
                post.img_urls = convertToArray(post.img_urls)
            });
            return res.status(200).json(adIdPostList);
        }
    } catch (error) {
        next(error);
    }
}

exports.getAllCustomerPost = async (req, res, next) =>{
    try {
        const {limit, offset} = req.query;
        const cusPostList = await postModel.getAllPostsOfCustomer(Number(limit), Number(offset));

        if(cusPostList.length === 0){
            res.status(404).json({
                message: "Không tìm thấy bào viết !"
            })
        }
        else{
            cusPostList.forEach(post =>{
                post.img_urls = convertToArray(post.img_urls)
            })
            res.status(200).json(cusPostList);
        }
    } catch (error) {
        next(error)
    }
}

exports.getAllCustomerPostById = async (req, res, next) =>{
    try {
        const {customer_id} = req.params;
        const {limit, offset} = req.query;
        const cusIdPostList = await postModel.getAllPostsOfCustomerById(Number(customer_id), Number(limit), Number(offset));

        if(cusIdPostList.length === 0){
            res.status(404).json({
                message: "Không tìm thấy bài viết !",
            });
        }
        else{
            cusIdPostList.forEach(post =>{
                post.img_urls = convertToArray(post.img_urls);
            })
            res.status(200).json(cusIdPostList);
        }
    } catch (error) {
        next(error)
    }
}

exports.getPostById = async (req, res, next) =>{
    try {
        const post_id = req.params.post_id ? Number(req.params.post_id) : 1;
        const postResult = await postModel.getPostById(post_id);

        if(postResult === null || postResult === undefined || postResult === ""){
            return res.status(404).json({
                message: "Không tìm thấy bài viết !",
            });
        }

        return res.status(200).json(postResult);
    } catch (error) {
        
    }
}

exports.createPost = async (req, res, next) =>{
    try {
        const {title, thumbnail, summary, content, image_urls = [], user_id} = req.body;
        const result =  await postModel.createPost(title, thumbnail, summary, content, image_urls, Number(user_id));

        return res.status(201).json({
            message: "Tạo bài viết thành công !",
            results: result
        })
    } catch (error) {
        next(error)
    }
}

exports.updatePosts = async (req, res, next) =>{
    try {
        const {post_id, title, thumbnail, summary, content, image_urls = []} = req.body;
        const result = await postModel.updatePost(Number(post_id), title, thumbnail, summary, content, image_urls);

        return res.status(200).json({
            message: "Cập nhật bài viết thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}

exports.deletePost = async(req, res, next) =>{
    try {
        const {post_id} = req.body;
        const result = await postModel.deletePost(Number(post_id));

        return res.status(200).json({
            message: "Xoá bài viết thành công !",
            result: result
        })
    } catch (error) {
        next(error);
    }
}