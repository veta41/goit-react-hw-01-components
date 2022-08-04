import PropTypes from 'prop-types';
import { Label, Percentage, StatisticsWripper, StatList, StatListItem, Title } from './Statistics.styled';

export default function Statistics ({title, stats})
{
  return (

<StatisticsWripper>
  <Title>{title}</Title>

  <StatList>
    {stats.map(stat => (
      <StatListItem key={stat.id}>
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