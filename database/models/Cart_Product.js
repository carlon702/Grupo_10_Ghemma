module.exports = (sequelize, dataTypes) => {
    let alias = "cartProduct";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    };
    let config = {
        tableName: "cart_product",
        timestamps: false
    };

    const cartProduct = sequelize.define(alias, cols, config);

    
}