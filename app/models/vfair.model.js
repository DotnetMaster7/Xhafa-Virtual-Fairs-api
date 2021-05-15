module.exports = (sequelize, Sequelize) => {
  const VFair = sequelize.define("vfairs", {
    logo: {
      type: Sequelize.TEXT('long')
    },
    start: {
      type: Sequelize.DATE
    },
    end: {
      type: Sequelize.DATE
    },
    exhibition: {
      type: Sequelize.INTEGER
    },
    max: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return VFair;
};
