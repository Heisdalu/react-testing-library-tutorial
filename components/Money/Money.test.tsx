import { screen, render } from "@testing-library/react";
import { moneyProps } from "@/pages/about";
import Money from "./Money";

test("checks if onAddmoney is 33", (done) => {
  const moneyFunc = (num: number): void => {
    console.log(num);
    if (num === 33) {
      expect(num).toBe(33);
    } else {
        
    }
    expect(num).toBe(33);
    done();
  };
  render(<Money onAddMoney={moneyFunc} />);
});
