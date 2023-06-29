import { useState } from "react";

//폼에서 사용할 커스텀 훅 만들었다

const UseForm = initValues => {
  const [values, SetValues] = useState(initValues);

  const handleChange = event => {
    const { name, value } = event.target;
    SetValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(values);
    SetValues({
      id: "",
      password: "",
    });
  };

  return { values, handleChange, handleSubmit };
};
export default UseForm;
