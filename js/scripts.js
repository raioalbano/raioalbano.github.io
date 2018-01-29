/*var ctx = document.getElementById("myChart");

var skills = {
  labels: [],
  values: []
}

var numberToLevel = ['','Basic', 'Intermediate', 'Advanced',''];

addAllSkills();

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: skills.labels,
        datasets: [{
            data: skills.values,
            backgroundColor:
                '#495fb4'
            ,
            borderColor:
                '#3c4d92'
            ,
            borderWidth: 1
        }]
    },
    options: {
      legend: { display:false},
      tooltips:{
        displayColors: false,
        callbacks: {
          title: function(tooltipItem, data) {
            return data['labels'][tooltipItem[0]['index']];
          },
          label: function(tooltipItem, data) {
            var value = data['datasets'][0]['data'][tooltipItem['index']];
            return numberToLevel[value];
          }
        },
        backgroundColor: '#FFF',
        titleFontSize: 12,
        titleFontColor: '#0066ff',
        bodyFontColor: '#000',
        bodyFontSize: 12,
        displayColors: false
      },
      scales: {
          yAxes: [{
            ticks: {
              fontColor: '#FFF',
              fontSize:14,
              beginAtZero:true,
              max: 3.0,
              maxTicksLimit: 8,
              callback: function(value, index, values) {
                  return numberToLevel[value];
              }
            },
          }],
          xAxes: [{
            ticks: {
              fontColor: '#FFF',
              autoSkip: false,
              fontSize:14,
              maxRotation: 80,
              minRotation: 80,
            },

          }]
      }
    }
});

function addSkill(label, value){
  skills.labels.push(label);
  skills.values.push(value);

}
function addAllSkills() {
  addSkill('Java', 3);
  addSkill('HTML', 3);
  addSkill('CSS', 2);
  addSkill('JavaScript', 3);
  addSkill('C', 3);
  addSkill('C++', 2);
  addSkill('C#', 2);
  addSkill('Git', 2);
  addSkill('MySQL', 2);
  addSkill('Postgres', 2);
  addSkill('Oracle', 2);
  addSkill('AngularJS', 2);
  addSkill('Node.js', 2);
  addSkill('jQuery', 3);

}*/
