// Use "use client" if you're in a Next.js environment with React Server Components.
"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    // Define the data for the Doughnut chart
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 567, 2500],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
                hoverOffset: 4,
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    };

    // Define the options for the Doughnut chart
    const options = {
        cutout: '60%', // Use 'cutout' for Chart.js v4 and above
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <Doughnut
            data={data}
            options={options}
        />
    );
};

export default DoughnutChart;
