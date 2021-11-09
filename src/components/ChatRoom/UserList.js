/* eslint-disable no-unused-vars */
import { Collapse, Typography, Avatar } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header,
        p {
            color: white;
        }
        .ant-collapse-content-box {
            padding: 0 40px;
        }
        .add-room {
            color: white;
            padding: 0;
        }
        .username {
            color: white;
            margin-left: 10px;
        }
        .btnUsers {
            border: none;
            background: unset;
            padding-bottom: 15px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
   
`;

function UserList() {
//   const {rooms, setOpenModal, setSelectedRoomId} = useContext(AppContext);  

  const onAddRoom = () => {
    // setOpenModal(true);
  }

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="Danh sách liên hệ" key='1'>
        <button className="btnUsers">
            <Avatar src={'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/cp0/p74x74/150816222_1634895136695784_6355006531466333031_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=K_HXRNcFaoEAX9XDHiV&_nc_ht=scontent.fsgn2-6.fna&oh=6fc4d34df46e667bc5ebb2f9d37cc246&oe=61B04591'}></Avatar>
            <Typography.Text className="username" >{'Quốc Khánh'}</Typography.Text>
        </button>
        <button className="btnUsers">
            <Avatar src={'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/cp0/s74x74/120320127_1044022869365802_1451820943936159455_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vkzsRUX8sb0AX-fKLyN&_nc_ht=scontent.fsgn2-6.fna&oh=a5b1c803c9254620338a407bd2d1d997&oe=61B14F11'}></Avatar>
            <Typography.Text className="username" >{'Hoàng Vũ'}</Typography.Text>
        </button>
        <button className="btnUsers">
            <Avatar src={'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/cp0/s74x74/120320127_1044022869365802_1451820943936159455_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vkzsRUX8sb0AX-fKLyN&_nc_ht=scontent.fsgn2-6.fna&oh=a5b1c803c9254620338a407bd2d1d997&oe=61B14F11'}></Avatar>
            <Typography.Text className="username" >{'Hoàng Vũ'}</Typography.Text>
        </button>
        <button className="btnUsers">
            <Avatar src={'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/cp0/s74x74/120320127_1044022869365802_1451820943936159455_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vkzsRUX8sb0AX-fKLyN&_nc_ht=scontent.fsgn2-6.fna&oh=a5b1c803c9254620338a407bd2d1d997&oe=61B14F11'}></Avatar>
            <Typography.Text className="username" >{'Hoàng Vũ'}</Typography.Text>
        </button>
      </PanelStyled>
    </Collapse>
  );
}

export default UserList;
