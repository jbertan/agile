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
          type="email"
          className="mail__input--input"
          placeholder="email adresses"
          ref={inputRef}
          required
        />
        <label className="mail__input--label">email adresses</label>
      </div>
      <button className="button" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};
export default MailComponent;
