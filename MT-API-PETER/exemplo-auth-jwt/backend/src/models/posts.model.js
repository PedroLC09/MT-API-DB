const db = require('../config/db');

async function sf_create_post(body) {
    let sql = `INSERT INTO posts (user_id,
                                    content,
                                    created_at)
                                    VALUES (?,
                                            ?,
                                            ?)
              `;
    const [result] = db.query(sql, [user_id, content, null])
    return 0;
}

async function sf_update_post() {

}

module.exports = {
    sf_create_post,
    sf_update_post
}