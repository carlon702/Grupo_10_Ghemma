module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(10)
        }
    };
    let config = {
        tableName: "cart",
        timestamps: false
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        });
        Cart.belongsToMany(models.Product, {
            as: "products",
            through: "cart_product",
            foreignKey: "cart_id",
            otherKey: "product_id",
            timestamps: false,
          });
    }
}