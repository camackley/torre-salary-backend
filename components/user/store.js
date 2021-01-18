/* Network */
const NetworkHelper = require("../../network/helper");

const getUserStrength = async (username) => {
  let UserData = await NetworkHelper.getHttp(
    "https://torre.bio/api/bios/" + username
  );

  UserData.strengths.sort((a, b) => {
    if (a.weight > 0) {
      isRecommended = true;
    }
    if (a.weight < b.weight) {
      return 1;
    } else if (a.weight > b.weight) {
      return -1;
    } else {
      return 0;
    }
  });

  return UserData.strengths;
};

const getJobsForAverage = async (role) => {
  query = JSON.stringify({
    "skill/role": { text: role, experience: "potential-to-develop" },
  });
  var haveCompensationsData = ({ compensation }) => compensation != null;
  var haveDatainCompensationsData = ({ compensation }) =>
    compensation.data != null;
  var haveMinCompensationsData = ({ compensation }) =>
    compensation.data.minAmount != null;

  let jobsInfo = await NetworkHelper.postHttp(
    `https://search.torre.co/opportunities/_search/?&offset=0&size=1&aggregate=false`,
    query
  );

  const jobsTotalToAverage = Math.round(jobsInfo.total * 0.3);

  if (jobsTotalToAverage > jobsInfo.size) {
    jobsInfo = await NetworkHelper.postHttp(
      `https://search.torre.co/opportunities/_search/?&offset=1&size=${jobsTotalToAverage}&aggregate=false`,
      query
    );
  }

  jobsInfo.results = jobsInfo.results.filter(haveCompensationsData);
  jobsInfo.results = jobsInfo.results.filter(haveDatainCompensationsData);
  jobsInfo.results = jobsInfo.results.filter(haveMinCompensationsData);
  return jobsInfo.results;
};

const getUser = async (username) => {
  let UserData = await NetworkHelper.getHttp(
    "https://torre.bio/api/bios/" + username
  );

  return UserData;
};

module.exports = {
  getUserStrength,
  getJobsForAverage,
  getUser,
};
