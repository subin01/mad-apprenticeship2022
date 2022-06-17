/* global gsap */

import { common } from './common.js';

var timeout = null;

const BANGALORE_CITY_ID = 1;
const MANGALORE_CITY_ID = 2;
const TRIVANDRUM_CITY_ID = 3;
const MUMBAI_CITY_ID = 4;
const PUNE_CITY_ID = 5;
const CHENNAI_CITY_ID = 6;
const VELLORE_CITY_ID = 8;
const COCHIN_CITY_ID = 10;
const HYDERABAD_CITY_ID = 11;
const DELHI_CITY_ID = 12;
const CHANDIGARH_CITY_ID = 13;
const NAGPUR_CITY_ID = 15;
const COIMBATORE_CITY_ID = 16;
const VIZAG_CITY_ID = 17;
const VIJAYAWADA_CITY_ID = 18;
const GWALIOR_CITY_ID = 19;
const LUCKNOW_CITY_ID = 20;
const BHOPAL_CITY_ID = 21;
const MYSORE_CITY_ID = 22;
const GUNTUR_CITY_ID = 23;
const AHMEDABAD_CITY_ID = 24;
const DEHRADUN_CITY_ID = 25;

const programs_in_city = {}
programs_in_city[BANGALORE_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer', 'Human Capital Volunteer', 'Campaigns Volunteer'];
programs_in_city[CHENNAI_CITY_ID] = ['Foundation Skill Volunteer(5th-7th)', 'Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Fundraising Volunteer'];
programs_in_city[COIMBATORE_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer', 'Human Capital Volunteer', 'Campaigns Volunteer'];
programs_in_city[DELHI_CITY_ID] = ['Foundation Skill Volunteer(5th-7th)', 'Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer', 'Human Capital Volunteer', 'Campaigns Volunteer'];
programs_in_city[MUMBAI_CITY_ID] = ['Foundation Skill Volunteer(5th-7th)', 'Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer'];
programs_in_city[AHMEDABAD_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer', 'Human Capital Volunteer'];
programs_in_city[BHOPAL_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Fundraising Volunteer'];
programs_in_city[CHANDIGARH_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer', 'Human Capital Volunteer', 'Campaigns Volunteer'];
programs_in_city[COCHIN_CITY_ID] = ['Academic Support Volunteer(11th-12th)'];
programs_in_city[DEHRADUN_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Fundraising Volunteer', 'Human Capital Volunteer'];
programs_in_city[GUNTUR_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Fundraising Volunteer'];
programs_in_city[GWALIOR_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Fundraising Volunteer'];
programs_in_city[HYDERABAD_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer', 'Human Capital Volunteer'];
programs_in_city[LUCKNOW_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer'];
programs_in_city[MANGALORE_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer', 'Finance Volunteer', 'Campaigns Volunteer'];
programs_in_city[MYSORE_CITY_ID] = ['Foundation Skill Volunteer(5th-7th)', 'Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer', 'Finance Volunteer', 'Human Capital Volunteer'];
programs_in_city[NAGPUR_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer'];
programs_in_city[PUNE_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer'];
programs_in_city[TRIVANDRUM_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer'];
programs_in_city[VELLORE_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Wingman(Undergrads and Graduates)', 'Fundraising Volunteer', 'Finance Volunteer', 'Human Capital Volunteer', 'Campaigns Volunteer'];
programs_in_city[VIJAYAWADA_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Academic Support Volunteer(11th-12th)', 'Wingman(11th,12th)', 'Fundraising Volunteer', 'Finance Volunteer', 'Human Capital Volunteer', 'Campaigns Volunteer'];
programs_in_city[VIZAG_CITY_ID] = ['Academic Support Volunteer(5th-10th)', 'Fundraising Volunteer'];

function logFormContent(error) {
  const formData = new FormData(document.getElementById("form"));
  let log_info = Object.fromEntries(formData);
  log_info.error = error;
  const formDataJson = JSON.stringify({
    name: "registeration_error",
    log: JSON.stringify(log_info),
    level: "error",
  });
  // console.error(formDataJson)
  // Log the error
  
  fetch("system/log.php", {
    method: "POST",
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataJson
  });
}

function handleError(error) {
  clearTimeout(timeout);
  document.querySelector("#loading").style.display = 'none';
  document.querySelector("#form").style.display = 'none';
  var message = "<h3>Some issues were encountered when trying to add you to our database.</h3><h4>Please Refresh the page and try again.</h4>";
  document.querySelector("#result").innerHTML = message;
  document.querySelector("#result").scrollIntoView();

  logFormContent(error);
}

function handleResponse(ret) {
  clearTimeout(timeout);
  document.querySelector("#loading").style.display = 'none';
  if (ret.status === "fail") {
    logFormContent();
    document.querySelector("#form").style.display = 'block';
    var message = "<h3>Some issues were encountered when trying to add you to our database...</h3><ul>";
    for (var i in ret.data) {
      message += "<li>" + ret.data[i] + "</li>";
    }
    message += "</ul>";
    document.querySelector("#result").innerHTML = message;
    document.querySelector("#result").style.color = "red";
  } else if(ret.status === "error") {
    logFormContent();
    document.querySelector("#form").style.display = 'block';
    var message = "<h3>Some issues were encountered when trying to add you to our database...</h3>" + ret.message; 
    document.querySelector("#result").innerHTML = message;
    document.querySelector("#result").style.color = "red";

  } else if (ret.status == "success") {
    document.querySelector("#result").innerHTML = "<h3>You have been added to our database!</h3><p>You are one step closer to becoming a MADster!</p><p>We will reach out to you when we kickstart the volunteer recruitment process.</p>";
    document.querySelector("#sticky-submit-button").style.display = 'none';
  }
  document.querySelector("#result").scrollIntoView();
}

function submitForm(e) {
  e.preventDefault();
  document.querySelector("#loading").style.display = 'block';
  document.querySelector("#form").style.display = 'none';

  const formData = new FormData(e.target);
  const formDataJson = JSON.stringify(Object.fromEntries(formData));

  // const api_endpoint_url = 'https://mad2020.free.beeceptor.com/success'; // success case
  // const api_endpoint_url = 'https://mad2020.free.beeceptor.com/fail'; // fail case
  const api_endpoint_url =  e.target.action; // production

  fetch(api_endpoint_url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formDataJson
  })
    .then(response => response.json())
    .then(data => handleResponse(data))
    .catch(error => handleError(error));

  timeout = setTimeout(() => handleError("Timed out"), 10000); // 10 Second Timeout
};

function setJobStatus(e) {
  var status = e.target.value;
  if(status == "working") {
    document.querySelector(".working-section").style.display = 'block';
    document.querySelector(".student-section").style.display = 'none';
  } else if(status == "student") {
    document.querySelector(".student-section").style.display = 'block';
    document.querySelector(".working-section").style.display = 'none';
  } else if(status == "other") {
    document.querySelector(".student-section").style.display = 'none';
    document.querySelector(".working-section").style.display = 'none';
  }
} 

function setVolExp(e) {
  var status = e.target.value;
  if(status == "Yes") {
    document.querySelector("#volunteering_experience_details").style.display = 'block';
  } else {
    document.querySelector("#volunteering_experience_details").style.display = 'none';
  }
}

function setAvailableProgramsInCity(e) {
  const city_id = e.target.value;
  var programs = "<option value=''>Choose first preference for role</option>";
  programs += programs_in_city[city_id].map(program => "<option value='" + program + "'>" + program + "</option>").join("");

  document.querySelector("#applied_role").innerHTML = programs;

  programs = programs.replace("Choose first preference for role", "Choose second preference for role");
  document.querySelector("#applied_role_secondary").innerHTML = programs;
}

/* Show page when ready */
function onReady() {
  var campaign_id = "";
  var loc = document.location.href;
  if (loc.match(/\?c=/)) {
    campaign_id = loc.replace(/.+\?c=(.+)/, "$1");
  }
  if (campaign_id) {
    document.querySelector("#campaign").value = campaign_id;
  }

  document.querySelector("#job_status").addEventListener('change', setJobStatus);
  document.querySelector("#volunteering_experience").addEventListener('change', setVolExp);
  document.querySelector("#city_id").addEventListener('change', setAvailableProgramsInCity);

  document.getElementById('form').addEventListener('submit', submitForm);
  common.init();
  common.showHeaderAndButton();
}

window.onload = function () {
  onReady();
};

