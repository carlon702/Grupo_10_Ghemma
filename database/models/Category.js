module.exports = (sequelize, dataTypes) => {
    let alias = "Discount";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: "category",
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

 
}