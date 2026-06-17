const db = require("../configs/database.config");

exports.getActivites = async (limit = null, offset = null) =>{
    let sql = `select * from activities`;

    if(limit){
        if(offset){
            sql += ` limit ? offset ?`;
            const [rows] = await db.query(sql, [limit, offset]);
            return rows;
        }else{
            sql += ` limit ?`;
            const [rows] = await db.query(sql, [limit]);
            return rows;
        }
    }
    else{
        if(offset === null){
            const [rows] = await db.query(sql);
            return rows;
        }
    }
}

exports.addActivities = async (name, description, image_url, duration_minutes) =>{
    const result = await db.query(
        `insert into activities(name, description, image_url, duration_minutes, created_at)
        values(?, ?, ?, ?, NOW())`,
        [name, description, image_url, duration_minutes]
    );

    return{
        success: true,
        result: result
    }
}

exports.updateActivities = async (act_id, name, description, image_url, duration_minutes) =>{
    const result = await db.query(
        `update activities 
        set name = ?, description = ?, image_url = ?, duration_minutes = ?
        where id = ?`,
        [name, description, image_url, duration_minutes, act_id]
    );

    return {
        success: true,
        result: result
    }
}

exports.deleteActivites = async (act_id) =>{
    const conn = await db.getConnection();

    try {
        await conn.beginTransaction();

        await conn.query(
            `delete from tour_activities where activity_id = ?`,
            [act_id]
        );

        await conn.query(
            `delete from activities where id = ?`,
            [act_id]
        );

        await conn.commit();
        
    } catch (error) {
        await conn.rollback();
        throw error;
    }finally{
        await conn.release();
    }
}