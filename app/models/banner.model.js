module.exports = (sequelize, Sequelize) => {
  const Banner = sequelize.define("banners", {
    fairId: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.INTEGER
    },
    url: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.INTEGER
    }
  });

  return Banner;
};
