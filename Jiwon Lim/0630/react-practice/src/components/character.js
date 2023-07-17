import { useState, useEffect } from "react";

const Character = () => {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);

  useEffect(() => {
    setTextLength(text.length);
  }, [text]);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={onChange} />
      <p>Character count : {textLength}</p>
    </div>
  );
};
export default Character;
