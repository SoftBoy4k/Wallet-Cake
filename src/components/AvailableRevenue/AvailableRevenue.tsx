import './AvailableRevenue.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import moreIcon from '../../icons/more.png'


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [25, 75],
      backgroundColor: [
        '#DF1B00',
        '#F8C3BF',
      ],
      borderColor: [
        '#DF1B00',
        '#F8C3BF',
      ],
      borderWidth: 2,
      cutout: 48,
      spacing: 5,
      borderRadius: 10
    },
  ],
};

export const AvailableRevenue = () => {

  return (
    <div className='available-revenue'>
        <div className='block__header'>
          <h4>Available Revenue</h4>
          <img className='available-revenue__header__icon' style={{width: '30px'}} src={moreIcon} alt="more" />
        </div>
        <div className='available-revenue__chart'>
          <Doughnut data={data}/>
          <div className='available-revenue__chart__short-info'>
            <p className='available-revenue__chart__short-info__value'>25%</p>
            <p>Available</p>
          </div>
        </div>

       
        
        <div className='available-revenue__chart-info'>
          <div>
            <p className='available-revenue__chart-info__value'>25%</p>
            <p className='available-revenue__chart-info__name'>Available</p>
            <div>
              <div className='available-revenue__chart-info__bar-inner1'></div>
            </div>
          </div>
          <div>
            <p className='available-revenue__chart-info__value'>75%</p>
            <p className='available-revenue__chart-info__name'>Unavailable</p>
            <div>
              <div className='available-revenue__chart-info__bar-inner2'></div>
            </div>
          </div>
        </div>
    </div>
  )
}