import { defineComponent, h, PropType } from 'vue'

import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {}
    },
    plugins: {
      type: Array as PropType<Plugin<'line'>[]>,
      default: () => []
    },
    labels: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    },
    min: {
      type: Number,
      default: 500
    },
    stepSize: {
      type: Number,
      default: 500
    }
  },
  setup(props) {
    const chartData = {
      labels: props.labels,
      datasets: [
        {
          label: false,
          backgroundColor: '#37ACD2',
          borderColor: '#37ACD2',
          data: props.data,
          tension: 0.4
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false
          },
          ticks: {
            drawBorder: false,
            padding: 12,
            color: '#959595'
          }
        },
        y: {
          min: props.min,
          grid: {
            borderDash: [5, 5],
            borderColor: '#E0E0E0',
            drawBorder: false,
            drawTicks: false
          },
          ticks: {
            drawBorder: false,
            padding: 12,
            stepSize: props.stepSize,
            color: '#959595'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }

    return () =>
        h(Line, {
          chartData,
          chartOptions,
          chartId: props.chartId,
          width: props.width,
          height: props.height,
          cssClasses: props.cssClasses,
          styles: props.styles,
          plugins: props.plugins
        })
  }
})