import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  jiwon: {
    id: 0,
    name: "임지원",
    age: 28,
  },
  dong: {
    id: 1,
    name: "임",
    age: 2,
  },
};
const Profile = () => {
  const {username} = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];
  // console.log(profile)

  return <div>
    <h3>이름 : {profile.name}</h3>
    <h4>나이 : {profile.age}</h4>
    <button onClick={()=>navigate(-1)}>뒤로가기</button>
  </div>;
};
export default Profile;
