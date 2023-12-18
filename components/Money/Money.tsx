import { moneyProps } from "@/pages/about";

const Money = ({ onAddMoney }: { onAddMoney: moneyProps }) => {
  onAddMoney(23);

  //   addMoneyFunc(33);

  return <div>Money</div>;
};
export default Money;
