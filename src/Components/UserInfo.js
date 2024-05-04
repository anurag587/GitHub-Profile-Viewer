import { useParams } from "react-router-dom";

const UserInfo = () => {
    const params = useParams();
    const {username} = params;
    console.log(username)
  return (
    <div>
        <h1>Username :{username}</h1>
    </div>
  );
};
export default UserInfo;
