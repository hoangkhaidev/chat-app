import { Button, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useContext } from "react";
import styled from "styled-components";
import { auth } from "../../firebase/config";
import { AuthContext } from "../Context/AuthProvider";

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .username {
        color: white;
        margin-left: 5px;
    }
`;

function UserInfo() {

  // useEffect(() => {
  //   db.collection('users').onSnapshot((snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // }, []);
  const { user } = useContext(AuthContext);

  return (
    <WrapperStyled>
      <div>
          <Avatar src={user.photoURL}>{user.photoURL ? '' : user.displayName?.charAt(0)?.toUpperCase()}</Avatar>
          <Typography.Text className="username" >{user.displayName}</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
          Đăng xuất
      </Button>
    </WrapperStyled>
  );
}

export default UserInfo;
