import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PiechartStorage = (props) => {
    const items = props.items;
    const iteminStorage = items.length;
    return (
        <div>
            <Pie
                data={{
                    labels: ['Empty', 'Full'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [1000-iteminStorage, iteminStorage],
                            backgroundColor: [
                                '#b3e3c0',
                                '#177165',
                                
                            ],
                            borderColor: [
                                '#b3e3c0',
                                '#177165',
                                '#fe9c8f ',
                                
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}
                options={{
                    responsive: true,

                }}
            />
        </div>
    );
};

export default PiechartStorage;