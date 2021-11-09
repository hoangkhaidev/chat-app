/* eslint-disable no-unused-vars */
import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from '@ant-design/icons';
import { useContext} from "react";
import { AppContext } from "../Context/AppProvider";

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
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

function RoomList() {
  const {rooms, setOpenModal, setSelectedRoomId} = useContext(AppContext);  

  const onAddRoom = () => {
    setOpenModal(true);
  }

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="Danh sách các phòng" key='1'>
        {rooms.map((item) => <LinkStyled key={item.id} onClick={() => setSelectedRoomId(item.id)}>{item.name}</LinkStyled> )}
        {/* <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 2</LinkStyled>
        <LinkStyled>Room 3</LinkStyled> */}
        <Button type='text' icon={<PlusSquareOutlined />} className="add-room" onClick={() => onAddRoom()}>Thêm phòng</Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
