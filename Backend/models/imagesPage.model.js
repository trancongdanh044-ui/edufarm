const db = require("../configs/database.config");

exports.getAllImagesPage = async (limit) =>{
    const [rows] = await db.query(
        `select * 
        from images_page
        order by id desc
        limit ?`,
        [limit]
    );

    return rows;
}

exports.getAllImagesPageById = async (id) =>{
    const [rows] = await db.query(
        `select * from images_page where id = ?`,
        [id]
    );

    return rows[0];
}

exports.addImagesPage = async (image_url) =>{
    const result = await db.query(
        `insert into images_page(image_url)
        values(?)
        `,
        [image_url]
    );

    return {
        success: true,
    }
}

exports.updateImagesPage = async (id, image_url) =>{
    const result = await db.query(
        `update images_page set image_url = ? where id = ?`,
        [image_url, id]
    );

    return {
        success : true,
        id
    }
}

exports.deleteImagePage = async (id) => {
    const result = await db.query(
        `delete from images_page where id = ?`,
        [id]
    );

    return{
        success: true,
        id
    }
}