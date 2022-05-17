import propTypes from 'prop-types'
import { StatisticsContainer } from './Statistics.styled';

export default function Statistics({title, stats}) {
  return (
    <StatisticsContainer>
      <div className="stats">
          
      {title && <h2 className="title">{title}</h2>}
      <ul className="list">
        {stats.map(stat => (
          <li className="item" key={stat.id} style={{ backgroundColor: generateHEX() }}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
        
      </div>
    </StatisticsContainer>
  )
}

function generateHEX() {
  const chart = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chart[Math.floor(Math.random() * 16)];
  }
  return hex;
}

Statistics.propTypes = {
  title: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
}
