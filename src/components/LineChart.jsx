import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart() {
    return (
        <Line
            datasetIdKey="id"
            data={{
                labels: ["HTML", "CSS", "JS", "TAILWIND", "REACT", "CHARTJS"],
                datasets: [
                    {
                        id: 1,
                        label: "Used",
                        data: [50, 25, 50, 25, 40, 10],

                        backgroundColor: "rgba(181,66,255,0.3)",
                        borderColor: "rgb(181,66,255)",
                        borderWidth: 1.5,
                        pointStyle: false,
                        fill: true,
                        color: "#ff0000"
                    }
                ]
            }}
            options={{
                colors: {
                    enabled: true,
                    forceOverride: true
                },
                scales: {
                    x: {
                        border: {
                            color: "rgb(121,121,121)"
                        },
                        grid: {
                            drawOnChartArea: false,
                            tickColor: "rgb(121,121,121)"
                        },
                        min: 0,
                        max: 9
                    },
                    y: {
                        border: {
                            color: "rgb(121,121,121)"
                        },
                        grid: {
                            drawOnChartArea: false,
                            tickColor: "rgb(121,121,121)"
                        },
                        beginAtZero: true
                    },
                    maintainAspectRatio: false
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
    );
}
export default LineChart;
