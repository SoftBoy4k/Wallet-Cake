import './AvailableRevenue.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import moreIcon from '../../icons/more.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const initialData = {
  datasets: [
    {
      data: [0, 0],
      backgroundColor: ['#DF1B00', '#F8C3BF'],
      borderColor: ['#DF1B00', '#F8C3BF'],
      borderWidth: 2,
      cutout: 48,
      spacing: 5,
      borderRadius: 10
    },
  ],
};

export const AvailableRevenue = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);

  const [chartData, setChartData] = useState(initialData);
  const [value, setValue] = useState(0);
  const [available, setAvailable] = useState(0);
  const [unavailable, setUnavailable] = useState(0);

  useEffect(() => {
    const calculateValues = () => {
      let income = 0;
      let expenses = 0;
      transactions.forEach(el => {
        const dateInArray = el.date.split('.');
        const month = Number(dateInArray[1]) - 1;

        if (month === new Date().getMonth()) {
          if (el.transferOperations === 0) {
            expenses += el.amount;
          } else {
            income += el.amount;
          }
        }
      });

      const total = income + expenses;
      const newUnavailable = total > 0 ? (expenses / total) * 100 : 0;
      const newAvailable = 100 - newUnavailable;

      setChartData({
        ...initialData,
        datasets: [
          {
            ...initialData.datasets[0],
            data: [expenses, income],
          }
        ]
      });

      setValue(Number(newAvailable.toFixed(2)));
      setAvailable(Number(newAvailable.toFixed(2)));
      setUnavailable(Number(newUnavailable.toFixed(2)));
    };

    calculateValues();
  }, [transactions]);

  return (
    <div className='available-revenue'>
      <div className='block__header'>
        <h4>Available Revenue</h4>
        <img className='available-revenue__header__icon' style={{width: '30px'}} src={moreIcon} alt="more" />
      </div>
      <div className='available-revenue__chart'>
        <Doughnut data={chartData} />
        <div className='available-revenue__chart__short-info'>
          <p className='available-revenue__chart__short-info__value'>{value}%</p>
          <p>Available</p>
        </div>
      </div>
      <div className='available-revenue__chart-info'>
        <div>
          <p className='available-revenue__chart-info__value'>{available}%</p>
          <p className='available-revenue__chart-info__name'>Available</p>
          <div>
            <div className='available-revenue__chart-info__bar-inner1' style={{width: available}}></div>
          </div>
        </div>
        <div>
          <p className='available-revenue__chart-info__value'>{unavailable}%</p>
          <p className='available-revenue__chart-info__name'>Unavailable</p>
          <div>
            <div className='available-revenue__chart-info__bar-inner2' style={{width: unavailable}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}