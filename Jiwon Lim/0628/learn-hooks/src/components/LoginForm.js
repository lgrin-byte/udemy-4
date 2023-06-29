import { useState} from "react";

const LoginForm = () => {
  const [values, SetValues] = useState({ id: "", password: "" });
  const [loginList, SetLoginList] = useState([]);

  const handleChange = event => {
    SetValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    SetLoginList([...loginList, values]);
  };
  return (
    <>
      <div>
        <h2>Login page</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>이름 :</div>
            <input name="id" value={values["name"]} onChange={handleChange} />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>비밀번호 :</div>
            <input
              name="password"
              value={values["name"]}
              onChange={handleChange}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
      <div>
        <h4>form 제출 결과 </h4>
        {loginList.map((item, index) => {
          return (
            <div key={index}>
              <div>회원명 : {item.id} </div>
              <div>비밀번호 : {item.password} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default LoginForm;
