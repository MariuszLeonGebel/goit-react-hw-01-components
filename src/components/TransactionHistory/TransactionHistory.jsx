import propTypes from 'prop-types';
import { TransactionsContainer } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionsContainer>
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="tbody">
        {items.map(item => (
          <tr className="tr" key={item.id}>
            <td className="td">{item.type}</td>
            <td className="td">{item.amount}</td>
            <td className="css">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </TransactionsContainer>
  );
};

TransactionHistory.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.number,
  currency: propTypes.string,
};