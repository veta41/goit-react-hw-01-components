import PropTypes from 'prop-types';
import { Label, Percentage, StatisticsWripper, StatList, StatListItem, Title } from './Statistics.styled';




export default function Statistics ({title, stats})
{
  return (

<StatisticsWripper>

  {title && <Title>{title}</Title>  }
  

  <StatList>
    {stats.map(({id, label, percentage }) => (
      <StatListItem key={id} >
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
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