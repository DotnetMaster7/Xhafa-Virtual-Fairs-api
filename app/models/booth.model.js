module.exports = (sequelize, Sequelize) => {
  const Booth = sequelize.define("booths", {
    fairId: {
      type: Sequelize.INTEGER
    },
    companyId: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    layout: {
      type: Sequelize.STRING,
      defaultValue: '0'
    },
    color: {
      type: Sequelize.STRING,
      defaultValue: '1'
    },
    composite: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    },
    ready: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    position: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    visits: {
      type: Sequelize.INTEGER
    },
    chats: {
      type: Sequelize.INTEGER
    },
    calls: {
      type: Sequelize.INTEGER
    },
    video: {
      type: Sequelize.INTEGER
    }
  });

  return Booth;
};
