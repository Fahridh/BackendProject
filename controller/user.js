const User = require("../models/User"),
  pool = require("../config/db");

const userById = async (req, res) => {
  try {
    const id = res.locals.user.id;
    console.log(id);

    const query = "SELECT * FROM users WHERE id = ?";
    const [rows] = await pool.query(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    const user = rows[0];

    const data = {
      name: user.name,
      email: user.email,
    };

    res.status(200).json({
      status: "Success",
      data: data,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const update = async (req, res) => {
  try {
    const id = res.locals.user.id;
    const { name, email } = req.body;

    await User.updateUser(id, name, email);

    res.status(200).json({
      status: "Success",
      message: "Berhasil mengubah data",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  userById,
  update,
};
