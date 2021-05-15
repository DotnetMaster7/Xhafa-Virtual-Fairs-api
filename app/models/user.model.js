module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
    },
    companyId: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    email_verified_at: {
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.TEXT('long')
    },
    boothReady: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return User;
};
