module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('posts', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('posts');
    }
};
