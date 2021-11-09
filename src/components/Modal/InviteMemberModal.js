/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Form, Select, Avatar, Spin } from 'antd';
import { debounce } from 'lodash';
import { useContext, useMemo, useState } from 'react';
import { db } from '../../firebase/config';
import { AppContext } from '../Context/AppProvider';

function DebounceSelect({ fetchOptions, debounceTimeOut = 300, ...props}) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);
    
            fetchOptions(value, props.curMembers).then(newOptions => {
                setOptions(newOptions);
                setFetching(false);
            })
        }
        return debounce(loadOptions, debounceTimeOut)
    }, [debounceTimeOut, fetchOptions]);

    return (
        <Select 
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
        >
            {
                options.map(opt => (
                    <Select.Option key={opt.value} value={opt.value} title={opt.label}>
                        <Avatar size="small" src={opt.photoURL}>
                            {opt.photoURL ? '' : opt.label?.charAt(0).toUpperCase()}
                        </Avatar>
                        {` ${opt.label}`}
                    </Select.Option>
                ))
            }
        </Select>
    )
}

async function fetchUserList(search, curMembers) {
    return db
        .collection('users')
        .where('keywords', 'array-contains', search.toLowerCase())
        .orderBy('displayName')
        .limit(20)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                label: doc.data().displayName,
                value: doc.data().uid,
                photoURL: doc.data().photoURL
            })).filter(opt => !curMembers.includes(opt.value));
        });
}

const InviteMemberModal = () => {
    const [value, setValue] = useState([]);
    const { openModalInvite, setOpenModalInvite, selectedRoomId, selectedRoom } = useContext(AppContext);
    // const { user: {uid} } = useContext(AuthContext);
    const [form] = Form.useForm();
 
    const handleOk = () => {
        // addDocument('rooms', {...form.getFieldsValue(), members: [uid]});
        // form.resetFields();
        const roomRef = db.collection('rooms').doc(selectedRoomId);

        roomRef.update({
            members: [...selectedRoom.members, ...value.map(val => val.value)]
        })
        setOpenModalInvite(false);
    }

    const handleCancel = () => {
        setOpenModalInvite(false);
        // form.resetFields();
    }

    return (
       <div>
           <Modal
            title="Mời thêm thành viên"
            visible={openModalInvite}
            onOk={handleOk}
            onCancel={handleCancel}
           >
               <Form form={form} layout="vertical">
                    <DebounceSelect 
                        mode="multiple"
                        label="Tên các thành viên"
                        value={value}
                        placeholder="Nhập tên thành viên"
                        fetchOptions={fetchUserList}
                        onChange={newValue => setValue(newValue)}
                        style={{ width: '100%' }}
                        curMembers={selectedRoom.members}
                    />
               </Form>
           </Modal>
       </div> 
    )
}
export default InviteMemberModal;