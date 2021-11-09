/* eslint-disable react/jsx-pascal-case */
import { Avatar, Typography } from 'antd';
import { formatRelative } from 'date-fns';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthProvider';

const WrapperStyled = styled.div`
    margin-bottom: 8px;
    padding-top: 5px;
    .author {
        margin-left: 5px;
        font-weight: bold;
    }

    .date {
        margin-left: 10px;
        font-size: 11px;
        color: #a7a7a7;
    }

    .content {
        margin-left: 30px;
        background-color: #e4e6eb;
        padding-left: 12px;
        padding: 10px;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        border-top-right-radius: 18px;
    }

    .contentActive {
        margin-left: 30px;
        background-color: rgb(0, 132, 255);
        color: #fff;
        padding-left: 12px;
        padding: 10px;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        border-top-right-radius: 18px;
    }

    .textMessage {
        margin-top: 5px;
        display: flex;
        align-items: center;
    }

    .date {
        margin-left: 10px;
        font-size: 11px;
        color: #a7a7a7;
        order: 2;
    }

    .textMessageActive {
        margin-top: 5px;
        padding-bottom: 1px;
        text-align: right;
        margin-right: 10px;
    }

    .avatar {
        order: 2
    }
`;

function formatDate (seconds) {
    let formattedDate = '';
    if (seconds) {
        formattedDate = formatRelative(new Date(seconds * 1000), new Date());
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
}


function Message({ text, displayName, createdAt, photoURL, userId }) {
  const { user } = useContext(AuthContext);
  return (
    <WrapperStyled>
        {
            userId === user.uid ? '' : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size='small' src={photoURL} >
                        { photoURL ? '' : displayName?.charAt(0).toUpperCase() }
                    </Avatar>
                    <Typography.Text className="author">{ displayName }</Typography.Text>
                </div>
            )
        }
        <div className={userId === user.uid ? 'textMessageActive' : 'textMessage'}>
            <Typography.Text className="date">{ formatDate(createdAt?.seconds) }</Typography.Text>
            <Typography.Text className={userId === user.uid ? 'contentActive' : 'content'} >{ text }</Typography.Text>
        </div>
    </WrapperStyled>
  );
}

export default Message;
