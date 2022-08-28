import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {

};

const DoughnuthartsItems = (props) => {
    const items = props.items;
    const itemNames = [];
    for (let i = 0; i < items.length; i++) {
        itemNames.push(items[i]?.hardwareType);
    };
    
    const itemCounts = [];
    itemNames.forEach(function (x) { itemCounts[x] = (itemCounts[x] || 0) + 1; });
    const hardwareTypes = Object.keys(itemCounts);
    const hardwareCounts = Object.values(itemCounts);


    return (
        <div>
            <Doughnut
                data={{
                    labels: hardwareTypes,
                    datasets: [
                        {
                            label: '# of Votes',
                            data: hardwareCounts,
                            backgroundColor: [
                                '#005b96 ',
                                '#f6cd61',
                                '#fe9c8f ',
                                '#f9caa7',
                                '#83d0c9',
                                '#7bc043',
                                '#96ceb4',
                                '#8b9dc3',
                                '#f37736',//new
                                '#ee4035',
                                '#0392cf',
                                '#ffffff',
                                '#854442',
                                '#be9b7b',
                                '#f7f7f7',
                                '#dcedc1',
                            ],
                            borderColor: [
                                '#005b96',
                                '#f6cd61',
                                '#fe9c8f ',
                                '#f9caa7',
                                '#83d0c9',
                                '#7bc043',
                                '#96ceb4',
                                '#8b9dc3',
                                '#f37736',//new
                                '#ee4035',
                                '#0392cf',
                                '#ffffff',
                                '#854442',
                                '#be9b7b',
                                '#f7f7f7',
                                '#dcedc1',
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

export default DoughnuthartsItems;