const ctx = document.getElementById('myChart');

const customControlPoints = [
    { x: 0, y: 0 },
    { x: 10, y: 20 },
    { x: 20, y: 80 },
    { x: 30, y: 90 },
    { x: 40, y: 50 }
];

customControlPoints[0] = { x: 80, y: 0 }; 
customControlPoints[1] = { x: 5, y: 80 }; 
customControlPoints[customControlPoints.length - 2] = { x: 35, y: 90 }; 
customControlPoints[customControlPoints.length - 1] = { x: 40, y: 50 };

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];
const datapoints = [12, 55, 35, 65, 55];

const data = {
    labels: meses,
    datasets: [
        {
            data: datapoints,
            borderColor: '#8591E2',
            fill: false,
            lineTension: 0.4,
            controlPoints: customControlPoints,
            pointStyle: 'circle',
            pointRadius: 5,
            pointHoverBackgroundColor: '#262525',
            pointHoverBorderWidth:2,
            pointHoverBorderColor: '#D2FB5F'
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false 
            }
        },
        backgroundColor: '#f0f0f0', 
        responsive: true,
        elements: {
            line: {
                borderWidth: 3,
                borderCapStyle: 'round' 
            },
            point: {
                radius: 3, 
                hoverRadius: 10
            }
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    color: '#737373', 
                    font: {
                        size: 15 
                    }
                }
            },
            y: {
                display: false,
            }
        },
    },
};

new Chart(ctx, config);
