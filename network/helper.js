const XMLRequest = require("xmlhttprequest").XMLHttpRequest;
const https = require("https");

const getHttp = (url) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`{"path":"${url}", "code": ${xhttp.status}}`));
      }
    };
    xhttp.send();
  });
};

const postHttp = (url, data) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error(`{"path":"${url}", "code": ${xhttp.status}}`));
      }
    };
    xhttp.send(data);
  });
};

module.exports = {
  getHttp,
  postHttp,
};
