const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return tasks.init(sequelize, DataTypes);
};

class tasks extends Sequelize.Model {
  /**
   *
   * @param {Sequelize} sequelize
   * @param {Sequelize.DataTypes} DataTypes
   */
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        description: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        tags: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: 0,
        },
        completed_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "tasks",
        timestamps: true,
        indexes: [
          {
            name: "PRIMARY",
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
