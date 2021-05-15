module.exports = (sequelize, Sequelize) => {
  const visitor = sequelize.define("visitors", {
    userId: {
      type: Sequelize.INTEGER
    },
    phone: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    degree: {
      type: Sequelize.STRING
    }
  });

  return visitor;
};
