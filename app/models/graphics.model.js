module.exports = (sequelize, Sequelize) => {
  const Graphics = sequelize.define("graphics", {
    companyId: {
      type: Sequelize.INTEGER
    },
    logo: {
      type: Sequelize.TEXT('long')
    },
    tv: {
      type: Sequelize.TEXT('long')
    },
    banner1: {
      type: Sequelize.TEXT('long')
    },
    banner2: {
      type: Sequelize.TEXT('long')
    },
    banner3: {
      type: Sequelize.TEXT('long')
    },
    logolnk: {
      type: Sequelize.STRING
    },
    tvLnk: {
      type: Sequelize.STRING
    },
    banner1lnk: {
      type: Sequelize.STRING
    },
    banner2lnk: {
      type: Sequelize.STRING
    },
    banner3lnk: {
      type: Sequelize.STRING
    },
  });

  return Graphics;
};
