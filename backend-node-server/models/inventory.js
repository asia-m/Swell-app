module.exports = function (sequelize, Sequelize) {
    var InventorySchema = sequelize.define('Inventory', {
        item: Sequelize.STRING,
        make: Sequelize.STRING,
        description: Sequelize.STRING,
        serialNo: Sequelize.STRING,
        quantity: Sequelize.STRING,
        value: Sequelize.STRING,
    }, {
        timestamps: false
    });
    return InventorySchema;
}
