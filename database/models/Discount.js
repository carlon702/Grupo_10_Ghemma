module.exports = (sequelize, dataTypes) => {
    let alias = "Discount";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "discount",
        timestamps: false
    };

    const Discount = sequelize.define(alias, cols, config);

    Discount.associate = function(models) {
        Discount.hasMany(models.Product, {
           as: "products",
           foreignKey: "discount_id"
        })
    }
    return Discount;

 
}