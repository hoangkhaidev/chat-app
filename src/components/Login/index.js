import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const navigate = useNavigate();

  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  } 

  auth.onAuthStateChanged((user) => {
    if (user) {
        navigate('/');
    }
  });

  return (
    <div>
        <Row justify="center" style={{ height: 800 }}>
            <Col span={8}> 
                <Title style={{ textAlign: 'center' }} level={3} >
                    Tin Tin Chat
                </Title>
                <Button style={{ width: '100%', marginBottom: 5 }}>
                    Đăng nhập bằng Google
                </Button>
                <Button style={{ width: '100%' }} onClick={() => handleFbLogin()}>
                    Đăng nhập bằng Facebook
                </Button>
            </Col>
        </Row>
    </div>
  );
}

export default Login;
