// useInput
import useState from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(e.target.value);
    }
  };

  return { value, onChange }; // return {value: value, onChange: onChange}
};

export default useInput;
