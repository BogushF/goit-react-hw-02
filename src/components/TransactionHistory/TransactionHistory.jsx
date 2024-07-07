import s from "./TransactionHistory.module.css";
import { clsx } from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.header}>
        <tr>
          <th className={s.headerLine}>Type</th>
          <th className={s.headerLine}>Amount</th>
          <th className={s.headerLine}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={s.listItem} key={item.id}>
              <td className={clsx(s.line, s.type)}>{item.type}</td>
              <td className={s.line}>{item.amount}</td>
              <td className={s.line}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
