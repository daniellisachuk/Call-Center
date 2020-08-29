// socket init
$(document).ready(function() {
  //socket is global
  socket = io.connect();
  socket.on('connect', () => {
    alert("connected");

    socket.on("callDetails", (msg) => {
      console.log(msg);
      updateDuration(msg.duration);
      updateCity(msg.city);
      updateTopic(msg.topic);
      updateLanguage(msg.language)
      updateGender(msg.gender);
      updateAge(msg.age);
    });
  });
  socket.emit('getAll', '');
});

// The next part, in it's entirety, was copy-pasted from the first time i
// made the mistake of using if-else insted of switch-case
// Dear reader...
// Sorry...

var updateDuration = (duration) => {
    if(duration < 60){
      DurationChartData.datasets[0].data[0]++;
    }
    else if(duration < 180){
      DurationChartData.datasets[0].data[1]++;
    }
    else if (duration < 300) {
      DurationChartData.datasets[0].data[2]++;
    }
    else if (duration < 600) {
      DurationChartData.datasets[0].data[3]++;
    }
    else {
      DurationChartData.datasets[0].data[4]++;
    }
    durationChart.update();
};

var updateCity = (city) => {
  if (city == "jerusalem") {
    CityChartData.datasets[0].data[0]++;
  }
  else if (city == "telaviv") {
    CityChartData.datasets[0].data[1]++;
  }
  else if (city == "haifa") {
    CityChartData.datasets[0].data[2]++;
  }
  else if (city == "eilat") {
    CityChartData.datasets[0].data[3]++;
  }
  else if (city == "beersheva") {
    CityChartData.datasets[0].data[4]++;
  }
  else if (city == "petahtiqva") {
    CityChartData.datasets[0].data[5]++;
  }
  else if (city == "ariel") {
    CityChartData.datasets[0].data[6]++;
  }
  else if (city == "holon") {
    CityChartData.datasets[0].data[7]++;
  }
  else if(city == "batyam") {
    CityChartData.datasets[0].data[8]++;
  }
  cityChart.update();
};

var updateTopic = (topic) => {
  if (topic == "medicine") {
    TopicChartData.datasets[0].data[0]++;
  }
  else if (topic == "food") {
    TopicChartData.datasets[0].data[1]++;
  }
  else if (topic == "water") {
    TopicChartData.datasets[0].data[2]++;
  }
  else if (topic == "shelter") {
    TopicChartData.datasets[0].data[3]++;
  }
  else if (topic == "info") {
    TopicChartData.datasets[0].data[4]++;
  }
  else if (topic == "evacuation") {
    TopicChartData.datasets[0].data[5]++;
  }
  else if (topic == "medicalAttention") {
    TopicChartData.datasets[0].data[6]++;
  }
  topicChart.update();
};

var updateLanguage = (language) => {
  if (language == "hebrew") {
    LanguageChartData.datasets[0].data[0]++;
  }
  else if (language == "english") {
    LanguageChartData.datasets[0].data[1]++;
  }
  else if (language == "amhari") {
    LanguageChartData.datasets[0].data[2]++;
  }
  else if (language == "russian") {
    LanguageChartData.datasets[0].data[3]++;
  }
  else if (language == "thai") {
    LanguageChartData.datasets[0].data[4]++;
  }
  languageChart.update();
};

var updateGender = (gender) => {
  if (gender == "male") {
    GenderChartData.datasets[0].data[1]++;
  }
  else if (gender == "female") {
    GenderChartData.datasets[0].data[0]++;
  }
  genderChart.update();
};

var updateAge = (age) => {
  if (age < 20) {
    AgeChartData.datasets[0].data[0]++;
  }
  else if (age < 30) {
    AgeChartData.datasets[0].data[1]++;
  }
  else if (age < 40) {
    AgeChartData.datasets[0].data[2]++;
  }
  else if (age < 50) {
    AgeChartData.datasets[0].data[3]++;
  }
  else if (age < 60) {
    AgeChartData.datasets[0].data[4]++;
  }
  else {
    AgeChartData.datasets[0].data[5]++;
  }
  ageChart.update();
};


// --------------------------------- DURATION ----------------------------------
var DurationChartData = {
    labels: ['< 1 Min', '1 Min - 3 Min', '3 Min - 5 Min', '5 Min - 10 Min', '> 10 Min'],
    datasets: [{
        label: 'Duration',
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
}

var ctx1 = $("#durationChart").get(0).getContext("2d")
var durationChart = new Chart(ctx1, {
    type: 'doughnut',
    data: DurationChartData,
    options: {
        title: {
            display: true,
            text: 'Duration'
        }
    }
});


// --------------------------------- CITY -----------------------------------
var CityChartData = {
    labels: ['Jerusalem', 'Tel-Aviv', 'Haifa', 'Eilat', 'Beer Sheva', 'Petah Tiqua', 'Ariel', 'Holon', 'Bat-Yam'],
    datasets: [{
        label: 'Cities',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(249, 207, 221, 0.2)',
          'rgba(153, 86, 98, 0.2)',
          'rgba(192, 137, 103, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(249, 207, 221, 1)',
          'rgba(153, 86, 98, 1)',
          'rgba(192, 137, 103, 1)'



        ],
        borderWidth: 1
    }]
}

var ctx2 = $("#cityChart").get(0).getContext("2d")
var cityChart = new Chart(ctx2, {
    type: 'doughnut',
    data: CityChartData,
    options: {
        title: {
            display: true,
            text: 'Cities'
        }
    }
});


// --------------------------------- TOPIC -----------------------------------
var TopicChartData = {
    labels: ['Medicine', 'Food', 'Water', 'Shelter', 'Info', 'Evacuation', 'Medical Attention'],
    datasets: [{
        label: 'Topics',
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(249, 207, 221, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(249, 207, 221, 1)'
        ],
        borderWidth: 1
    }]
}

var ctx3 = $("#topicChart").get(0).getContext("2d")
var topicChart = new Chart(ctx3, {
    type: 'doughnut',
    data: TopicChartData,
    options: {
        title: {
            display: true,
            text: 'Topics'
        }
    }
});


// -------------------------------- LANGUAGE -----------------------------------
var LanguageChartData = {
    labels: ['Hebrew', 'English', 'Amhari', 'Russian', 'Thai'],
    datasets: [{
        label: 'Language',
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
}

var ctx4 = $("#languageChart").get(0).getContext("2d")
var languageChart = new Chart(ctx4, {
    type: 'doughnut',
    data: LanguageChartData,
    options: {
        title: {
            display: true,
            text: 'Languages'
        }
    }
});


// --------------------------------- GENDER -----------------------------------
var GenderChartData = {
    labels: ['Female', 'Male'],
    datasets: [{
        label: 'Gender',
        data: [0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    }]
}

var ctx5 = $("#genderChart").get(0).getContext("2d")
var genderChart = new Chart(ctx5, {
    type: 'doughnut',
    data: GenderChartData,
    options: {
        title: {
            display: true,
            text: 'Genders'
        }
    }
});


// --------------------------------- AGE ------------------------------------
var AgeChartData = {
    labels: ['< 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '60 <'],
    datasets: [{
        label: 'Age',
        data: [0, 0, 0, 0, 0, 0 ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

var ctx6 = $("#ageChart").get(0).getContext("2d")
var ageChart = new Chart(ctx6, {
    type: 'doughnut',
    data: AgeChartData,
    options: {
        title: {
            display: true,
            text: 'Ages'
        }
    }
});
