/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { HOME_ROUTE, PROFILE_ROUTE, CONTACTS_ROUTE } from '@/constants/routes';

import logoimg from '../../assets/images/logo192.png';
import st from './styles.module.scss';

export default function Header({ showModal }) {
  return (
    <div className={st.header}>
      <div className={st.logo}>
        <div className={st.reactImg}>
          <img src={logoimg} alt="s" />
        </div>
        <div className={st.links}>
          <Link to={HOME_ROUTE}>Home</Link> 
          <Link to={CONTACTS_ROUTE}>Contacts</Link>
          <Link to={PROFILE_ROUTE}>Profile</Link> 
        </div>
      </div>
      <Button type="primary" onClick={showModal}>
        Sign In
      </Button>
    </div>
  );
}
