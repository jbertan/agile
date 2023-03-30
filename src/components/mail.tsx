import { FormEvent } from "react";
import { useRef } from "react";

interface props {
  setMail: (input: string) => void;
  dispatch: (e: any) => any;
}

const MailComponent = ({ setMail, dispatch }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = () => {
    const input = inputRef.current?.value!;
    if (inputRef.current) {
      setMail(input);
      dispatch({ type: "mail", payload: input });
    }
  };
  return (
    <div className="mail">
      <h3 className="mail__welcome">Welcome to agile analyses</h3>
      <div className="mail__input">
        <input
          id="email"
          type="email"
          className="mail__input--input"
          placeholder="Enter your email"
          ref={inputRef}
          data-testid="email input"
          required
        />
        <label htmlFor={"email"} className="mail__input--label">
          Enter your email
        </label>
      </div>
      <button className="button" role="button" onClick={() => submitHandler()}>
        Start
      </button>
    </div>
  );
};
export default MailComponent;
