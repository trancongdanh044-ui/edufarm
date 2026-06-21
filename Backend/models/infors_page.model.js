const db = require("../configs/database.config");

exports.getInforsPage = async () =>{
    const [rows] = await db.query(
        `select * from infors_page order by id desc`
    );

    return rows[0];
}

exports.addInforsPage = async (address, facebook, message, zalo, phone) =>{
    const result = await db.query(
        `insert into infors_page(address, facebook, message, zalo, phone)
        values(?, ?, ?, ?, ?)`,
        [address, facebook, message, zalo, phone]
    );

    return{
        sucsess: true,
        result: result
    }
}

exports.updateInforsPage = async(id, address, facebook, message, zalo, phone)=>{
    const result = await db.query(
        `update infors_page set 
        address = ?, facebook = ?, 
        message = ?, zalo = ?, phone = ?
        where id = ?`,
        [address, facebook, message, zalo, phone, id]
    );

    return{
        sucsess: true,
        result: result
    }
}

exports.deleteInforPage = async (id) =>{
    const result = await db.query(
        `delete from infors_page where id = ?`,
        [id]
    );

    return{
        sucsess: true,
        result: result
    }
}