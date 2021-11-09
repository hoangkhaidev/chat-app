import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  // const navigate = useNavigate();

  const handleFbLogin = async (provider) => {
    const { additionalUserInfo, user} = await auth.signInWithPopup(provider);
    
    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName.toLowerCase())
      })
    }
  } 

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //       navigate('/');
  //   }
  // });

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
                <Button style={{ width: '100%' }} onClick={() => handleFbLogin(fbProvider)}>
                    Đăng nhập bằng Facebook
                </Button>
            </Col>
        </Row>
    </div>
  );
}

export default Login;
