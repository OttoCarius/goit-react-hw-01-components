import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={isOnline ? style.statusOnline : style.statusOffline}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={style.name}>{name}</p>
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
