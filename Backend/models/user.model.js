const db = require("../configs/database.config");

exports.getAdminInforById = async (id) =>{
    const [rows] = await db.query(`
        select ad.id, u.*
        from admin ad
        join users u
        on ad.admin_id = u.id
        where u.id = ?
        `, [id]);
    
        return rows[0];
}

exports.getCustomerInforById = async (id) =>{
    const [rows] = await db.query(`
        select c.id, u.* 
        from customer c
        join users u
        on c.id = u.id
        where u.id = ?
        `, [id]);
    
    return rows[0];
}
