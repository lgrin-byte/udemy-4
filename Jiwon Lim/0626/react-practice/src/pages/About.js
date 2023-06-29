import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onSubmit = event => {
    event.preventDefault();
    navigate(`/search?query=${search}`);
  };

  const onChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>About</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="여행가고 싶은 곳은?"
          value={search}
          onChange={onChange}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default About;
