module.exports = (sequelize, Sequelize) => {
    const Invitations = sequelize.define("invitations", {
      companyId: {
        type: Sequelize.INTEGER
      },
      fairId: {
        type: Sequelize.INTEGER
      },
      inviteStatus: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });
  
    return Invitations;
  };
  