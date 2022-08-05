import PropTypes from 'prop-types';
import { Label, Percentage, StatisticsWripper, StatList, StatListItem, Title } from './Statistics.styled';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default function Statistics ({title, stats})
{
  return (

<StatisticsWripper>
  <Title>{title}</Title>

  <StatList>
    {stats.map(stat => (
      <StatListItem key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
      <Label>{stat.label}</Label>
      <Percentage>{stat.percentage}%</Percentage>
    </StatListItem>
    ))}
    
   
  </StatList>
</StatisticsWripper>

);
}


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};