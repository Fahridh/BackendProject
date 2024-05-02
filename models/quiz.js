const db = require("../config/db");


const createquiz = (id, title, description, type) => {
    const query = `INSERT INTO quiz (id, title, description, type) VALUES ('${title}', '${description}', '${type}') `;
    return db.execute(query);  
};

module.exports = {
    createquiz,
};
