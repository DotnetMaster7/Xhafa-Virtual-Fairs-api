module.exports = (sequelize, Sequelize) => {
  const Rep = sequelize.define("reps", {
    company_id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return Rep;
};
