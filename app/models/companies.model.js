module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("companies", {
    userId: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    representativename: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    email_verified_at: {
      type: Sequelize.DATE
    },
    phone: {
      type: Sequelize.STRING
    },
    web: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT('long')
    },
    address: {
      type: Sequelize.STRING
    },
    phd: {
      type: Sequelize.JSON
    },
    master: {
      type: Sequelize.JSON
    },
    bach: {
      type: Sequelize.JSON
    },
    highschool: {
      type: Sequelize.JSON
    },
    boothReady: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return Company;
};
