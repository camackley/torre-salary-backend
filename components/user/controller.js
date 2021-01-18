const store = require("./store");

const getSKills = async (username) => {
  try {
    let userStrengths = await store.getUserStrength(username);

    let isRecommendedFilter = ({ recommendations }) => recommendations > 0;
    let recommendedStrength = userStrengths.filter(isRecommendedFilter);
    return recommendedStrength;
  } catch (error) {
    throw error;
  }
};

const calculateSalary = async (username, data) => {
  try {
    let jobsForAverage = await store.getJobsForAverage(data.skill);
    var totalSalary = 0;
    jobsForAverage.forEach((job) => {
      if (job.compensation.data.currency === "COP$") {
        job.compensation.data.minAmount = job.compensation.minAmount / 3450;
      }
      if (job.compensation.data.periodicity === "monthly") {
        job.compensation.data.minAmount = job.compensation.data.minAmount * 12;
      }

      if (job.compensation.data.minAmount > 0) {
        totalSalary += job.compensation.data.minAmount;
      }
    });
    totalSalary = Math.round(totalSalary / jobsForAverage.length);

    let userInfo = await store.getUser(username);

    return {
      salaryEspected: {
        currency: "USD $",
        amount: totalSalary,
        periodicity: "yearly",
      },
      user: userInfo,
      jobs: jobsForAverage.slice(0, 12),
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSKills,
  calculateSalary,
};
