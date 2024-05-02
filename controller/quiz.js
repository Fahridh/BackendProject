const quizzez = require('../models/quiz');

const createquiz = async (req, res) => {
    try {
        const { title, description, type } = req.body;

        await quizzez.createquiz(title, description, type);

        const data = {
            id: id,
            title: title,
            description: description,
            type: type,
        };

        res.status(200).json({
            status: 'success',
            Message: 'Berhasil menambah quiz',
            data: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server Error',
        });
    }       
};

module.exports = {
    createquiz,
}