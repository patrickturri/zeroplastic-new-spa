import { Bar } from 'vue-chartjs'



export default {
  extends: Bar,
  mounted () {
    let data = {
        labels: [
          'Coca Cola',
          'Nestle',
          'Pepsico'
        ],
        datasets: [
          {
            data: [15, 10, 5],
            backgroundColor: '#003f5c'
          }
        ]
      }
    let options = {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Tons of plastic returned',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltip: {
            display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    this.renderChart(data, options)
  }
}