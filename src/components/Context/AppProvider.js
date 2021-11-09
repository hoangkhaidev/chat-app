/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo, useState } from 'react';
import useFireStore from '../../hooks/useFireStore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

function AppProvider({ children }) {

    const [openModal, setOpenModal] = useState(false); 
    const [openModalInvite, setOpenModalInvite] = useState(false); 
    const [selectedRoomId, setSelectedRoomId] = useState(''); 

    const {user: { uid }} = useContext(AuthContext);

    // rooms = {
    //   name: 'room name',
    //   description: 'mo ta',
    //   members: [uid1, uid2, ...]
    // }

    const roomsCondition = useMemo(() => {
      return {
        fieldName: 'members',
        operator: 'array-contains',
        compareValue: uid
      }
    }, [uid]);
  
    const rooms = useFireStore('rooms', roomsCondition);

    const selectedRoom = useMemo(
      () => rooms.find((room) => room.id === selectedRoomId) || {}
    , [rooms, selectedRoomId]);

    const usersCondition = useMemo(() => {
      return {
        fieldName: 'uid',
        operator: 'in',
        compareValue: selectedRoom.members
      }
    }, [selectedRoom.members]);

    const members = useFireStore('users', usersCondition);

  return (
    <AppContext.Provider 
      value={{ 
        rooms, 
        openModal, 
        setOpenModal,
        selectedRoomId, 
        setSelectedRoomId,
        selectedRoom,
        members,
        openModalInvite,
        setOpenModalInvite
      }}
    >
        {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
