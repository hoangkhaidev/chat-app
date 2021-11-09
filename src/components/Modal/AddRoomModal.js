import { Modal, Form, Input } from 'antd';
import { useContext } from 'react';
import { addDocument } from '../../firebase/services';
import { AppContext } from '../Context/AppProvider';
import { AuthContext } from '../Context/AuthProvider';

const AddRoomModal = () => {
    const {openModal, setOpenModal} = useContext(AppContext);
    const { user: {uid} } = useContext(AuthContext);
    const [form] = Form.useForm();
 
    const handleOk = () => {
        addDocument('rooms', {...form.getFieldsValue(), members: [uid]});
        form.resetFields();
        setOpenModal(false);
    }

    const handleCancel = () => {
        setOpenModal(false);
        form.resetFields();
    }

    return (
       <div>
           <Modal
            title="Tạo phòng"
            visible={openModal}
            onOk={handleOk}
            onCancel={handleCancel}
           >
               <Form form={form} layout="vertical">
                    <Form.Item label="Tên phòng" name="name">
                        <Input placeholder="Nhập tên phòng" />
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea placeholder="Nhập mô tả" />
                    </Form.Item>
               </Form>
           </Modal>
       </div> 
    )
}
export default AddRoomModal;