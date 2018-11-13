function toggleSettingsSwitch() {
    $('.a-btn--settings-switch').click(function () {
        $(this).toggleClass('off');
    });
}

function closeAlertBar() {
    $('.a-btn--close-alert').click(function () {
        $(this).parent().hide();
    });
}

function submitMessage() {
    $('.js-submit-form').click(function () {
        $(this).siblings('.a-textarea').val('');
        $(this).siblings('.o-settings__feedback').text('Hat geklappt!');

    });
}

function initiateTrafficDiagram() {
    const trafficDiagram = document.getElementById("traffic").getContext('2d');
    const diagram1 = new Chart(trafficDiagram, {
        responsive: true,
        type: 'line',
        data: {
            labels: ["16-22", "23-29", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: [{
                label: '# of Votes',
                data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                backgroundColor: 'rgba(115,119,191,0.2)',
                borderColor: 'rgba(115,119,191,1)',
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function initiateDailyTrafficDiagram() {
    const dailyTrafficDiagram = document.getElementById("daily-traffic").getContext('2d');
    var diagram2 = new Chart(dailyTrafficDiagram, {
        responsive: true,
        type: 'bar',
        data: {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                label: '',
                data: [75, 100, 175, 125, 225, 225, 200, 100],
                backgroundColor: '#7377BF',
            }]
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function initiateMobileUsersDiagram() {
    const mobileUsersDiagram = document.getElementById("mobile-users").getContext('2d');
    const diagram3 = new Chart(mobileUsersDiagram, {
        responsive: true,
        type: 'doughnut',
        data: {
            labels: ["Phones", "Tables", "Desktop"],
            datasets: [{
                label: '',
                data: [15, 15, 70],
                backgroundColor: [
                    '#81C98F',
                    '#74B1BF',
                    '#7377BF'
                ],
            }]
        },
        options: {
            legend: {
                display: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

$(document).ready(function () {
    console.log('loaded');
    toggleSettingsSwitch();
    initiateTrafficDiagram();
    initiateDailyTrafficDiagram();
    initiateMobileUsersDiagram();
    closeAlertBar();
    submitMessage();
});
