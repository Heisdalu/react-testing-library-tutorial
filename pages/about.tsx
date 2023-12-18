import Money from "@/components/Money/Money";
import { type } from "os";

export type moneyProps = (num: number) => void;

const About = () => {
  const addMoneyFunc: moneyProps = (num: number) => {
    console.log(num == 34);
    num === 33 ? 33 : 23;
  };

  return (
    <div className="p-[5rem]">
      <div>
        <label htmlFor="username">button</label>
        <input type="text" name="username" id="username" />
      </div>

      <div>
        <label htmlFor="lol">Button</label>
        <input type="text" name="lol" id="lol" />
      </div>
      <button>button</button>
      <span>button</span>
      <span aria-label="divine">divine</span>

      <Money onAddMoney={addMoneyFunc} />
    </div>
  );
};
export default About;
