const db = require("../configs/database.config");

exports.getAllPostsOfAdmin = async (limit, offset) =>{
    const [rows] = await db.query(`
        select p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar, group_concat(pig.image_url) as img_urls
        from posts p
        join users u
        on p.author_id = u.id
        left join post_images pig
        on pig.post_id = p.id
        where u.role = 'admin'
        group by p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar
        order by p.created_at desc
        limit ?
        offset ?
        `, [limit, offset]);
    return rows;
}

exports.getAllPostsOfAdminById = async(admin_id, limit, offset) =>{
    const [rows] = await db.query(
        `select p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar, group_concat(pig.image_url) as img_urls
        from posts p
        join users u on p.author_id = u.id
        join admin ad on ad.admin_id = u.id
        left join post_images pig on pig.post_id = p.id
        where admin_id = ?
        group by p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar,
        order by p.created_at desc
        limit ?
        offset ?
        `, [admin_id, limit, offset]
    );

    return rows;
}

exports.getAllPostsOfCustomerById = async(customer_id, limit, offset) =>{
    const [rows] = await db.query(
        `select p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar, group_concat(pig.image_url) as img_urls
        from posts p
        join users u on p.author_id = u.id
        join customer c on c.customer_id = u.id
        left join post_images pig on pig.post_id = p.id
        where customer_id = ?
        group by p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar
        order by p.created_at desc
        limit ?
        offset ?
        `,[customer_id, limit, offset]
    );

    return rows;
}

exports.getAllPostsOfCustomer = async (limit, offset) =>{
    const [rows] = await db.query(`
        select p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar, group_concat(pig.image_url) as img_urls
        from posts p
        join users u
        on p.author_id = u.id
        left join post_images pig
        on pig.post_id = p.id
        where u.role = 'customer'
        group by p.id, p.title, p.thumbnail,
         p.summary, p.content,
         p.view_count, p.created_at,
         p.updated_at, u.full_name,
         u.avatar
        order by p.created_at desc
        limit ?
        offset ?
        `, [limit, offset]
    );
    return rows;
}

exports.createPost = async (title, thumbnail, summary, content, image_urls = [], user_id) =>{
    const conn = await db.getConnection();

    try{
        await conn.beginTransaction();
        const [post] = await conn.query(`
            insert into posts(title, thumbnail, summary, content, created_at, author_id)
            values(?, ?, ?, ?, NOW(), ?)
            `,[title, thumbnail, summary, content, user_id]);
        
        const post_id = post.insertId;

        if(image_urls.length > 0){
            for(const img_url of image_urls){
                await conn.query(`
                    insert into post_images(post_id, image_url)
                    values(?, ?);
                    `, [post_id, img_url]);
            }
        }
        
        await conn.commit();
        return{
            success: true,
            post_id
        }
        
    }catch(error){
        await conn.rollback();
        throw error;
    }finally{
        conn.release();
    }
}

exports.updatePost = async (post_id, title, thumbnail, summary, content, image_urls = []) =>{
    const conn = await db.getConnection();
    try{
        await conn.beginTransaction();
        
        await conn.query(`
            update posts set title = ?, thumbnail = ?, summary = ?, content = ?
            where id = ?
            `, [title, thumbnail, summary, content, post_id]);
        
        await conn.query(`
            delete from post_images where post_id = ?
            `, [post_id]);

        if(image_urls.length > 0){
            for(const img_url of image_urls){
                await conn.query(`
                    insert into post_images(post_id, image_url)
                    values(?, ?)
                    `, [post_id, img_url]);
            }
        }

        await conn.commit();

        return{
            success: true,
            post_id
        }

    }catch(error){
        await conn.rollback();
        throw error;
    }finally{
        conn.release();
    }
}

exports.deletePost = async (post_id) =>{
    const conn = await db.getConnection();

    try{
        await conn.beginTransaction();

        await conn.query(
            `delete from post_images where post_id = ?`,
            [post_id]
        );

        await conn.query(
            `delete from posts where id = ?`,
            [post_id]
        );

        await conn.commit()

        return {
            success: true,
            post_id
        }
    }catch(error){
        await conn.rollback();
        throw error;
    }finally{
        conn.release();
    }
}