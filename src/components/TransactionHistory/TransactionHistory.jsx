import React from "react";
import styles from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <table className={styles.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                {items.map(({type, amount, currency, id}) => {
      return <TransactionItem key={id} type={type} amount={amount} currency={currency}/>
   })}
  </tbody>
</table>
    )
}

const TransactionItem = ({ type, amount, currency }) => {
    return (
        <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
        </tr>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency:PropTypes.string,
  }))
}

