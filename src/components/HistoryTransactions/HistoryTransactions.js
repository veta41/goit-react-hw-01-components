import PropTypes from 'prop-types';
import { Row, Table, Tbody, Thead } from './HistoryTransactions.styled';


export default function TransactionsHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
           
            <Row key={id} >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Row>
          );
        })}
      </Tbody>
    </Table>
  );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};