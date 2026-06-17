const db = require("../configs/database.config");

exports.getImagePage = async (type = null, limit = null) =>{

    let sql = `select * from images_page`;

    if(limit !== null && type !== null){
        sql += ` where type = ? order by id limit ?`;
        const [rows] = await db.query(sql, [type, limit]);
        return rows;
    }
    else if(limit === null && type !== null){
        sql += ` where type = ? order by id`;
        const [rows] = await db.query(sql, [type]);
        return rows;
    }
    else if(limit !== null && type === null){
        sql += ` order by id limit ?`;
        const [rows] = await db.query(sql, [limit]);
        return rows;
    }else{
        const [rows] = await db.query(sql);
        return rows;
    }
}

exports.getAllImagesPageById = async (id) =>{
    const [rows] = await db.query(
        `select * from images_page where id = ?`,
        [id]
    );

    return rows[0];
}

exports.addImagesPage = async (type, image_url) =>{
    const result = await db.query(
        `insert into images_page(type, image_url)
        values(?, ?)
        `,
        [type, image_url]
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