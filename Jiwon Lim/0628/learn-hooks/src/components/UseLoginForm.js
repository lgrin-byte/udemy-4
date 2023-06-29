import UseForm from "../hooks/useForm";

const UseLoginForm = () => {
  const { values, handleChange, handleSubmit } = UseForm({
    id: "",
    password: "",
  });
  return (
    <>
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>이름 : </div>
          <input name="id" value={values["id"]} onChange={handleChange} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>비밀번호 :</div>
          <input name="password" value={values["password"]} onChange={handleChange} />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};
export default UseLoginForm;
