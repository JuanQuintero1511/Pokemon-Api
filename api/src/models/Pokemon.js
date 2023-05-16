const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    hp: {
      type:DataTypes.STRING,
      allowNull:false
    },
    atack: {
      type:DataTypes.STRING,
      allowNull:false
    },
    defending: {
      type:DataTypes.STRING,
      allowNull: false
    },
    img: {
      type:DataTypes.STRING,
      unique: true,
      allowNull:false
    }
  },
  {
      timestamps: false
  });
};
