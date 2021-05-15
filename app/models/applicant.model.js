module.exports = (sequelize, Sequelize) => {
    const Applicant = sequelize.define("applicants", {
      companyId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
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
      courses: {
        type: Sequelize.JSON
      }
    });
  
    return Applicant;
  };
  