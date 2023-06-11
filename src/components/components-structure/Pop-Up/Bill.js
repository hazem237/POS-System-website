import "../../components-style/Form.css";
import { Button } from "../Reusable components/Button";

const Bill = ({
  userName,
  Bill,
  Discount,
  Tax,
  Total,
  setOpenBillWindow,
  cancelProccess,
}) => {
  const handlerPrint = () => {
    cancelProccess();
    setOpenBillWindow(false);
  };
  return (
    <div className="modalBackgroundBill">
      <div className="modalContainer modalBillContainer">
        <div className="titleCloseBtn "></div>
        <div className="title">
          <h1>
            {" "}
            HPOS Bill <i className="fa-solid fa-money-bill"></i>
          </h1>
        </div>
        <div className="body">
          <table className="Bill-Table">
            <thead>
              <th>User</th>
              <th>Bill</th>
              <th>Discount</th>
              <th>Tax</th>
            </thead>
            <tbody>
              <tr>
                <td>{userName}</td>
                <td>{Bill} $</td>
                <td>{Discount} %</td>
                <td>{Tax} $</td>
              </tr>
              <tr>
                <td>Total</td>
                <td colSpan="3"> {Total} $</td>
              </tr>
            </tbody>
          </table>
          <div className="button-container">
            <Button
              type="submit"
              text="Print"
              buttonStyle="btn--outline add"
              buttonSize="btn--medium "
              icon=<i className="fa-solid fa-print"></i>
              onClick={() => handlerPrint()}
            />
            <Button
              text="Cancel"
              buttonStyle="btn--outline cancel"
              buttonSize="btn--medium"
              onClick={() => setOpenBillWindow(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
