module.exports = (sequelize, Sequelize) => {
  const Destination = sequelize.define("countries", {
    destination: {
      type: Sequelize.STRING
    },
    flag: {
      type: Sequelize.STRING
    }
  });

  return Destination;
};
