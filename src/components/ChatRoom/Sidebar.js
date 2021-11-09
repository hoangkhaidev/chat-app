import { Col, Row } from "antd";
import styled from "styled-components";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";
import UserList from "./UserList";

const SidebarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
`;

function Sidebar() {
  return (
    <SidebarStyled>
        <Row>
            <Col span={24}><UserInfo /></Col>
            <Col span={24}><RoomList /></Col>
            <Col span={24}><UserList /></Col>
        </Row>
    </SidebarStyled>
  );
}

export default Sidebar;
