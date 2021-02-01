/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CopySvg } from '@/assets/icons';
import st from './styles.module.scss';

export default function User({ user }) {
  return (
    <div className={st.flexItem}>
      <div className={st.userImage}>
        <img className={st.photo} src={user.picture.large} alt="s" />
      </div>
      <div className={st.userInfo}>
        <div className={st.userName}>
          <a>
            {user && `${user.name.title} ${user.name.first} ${user.name.last}`}
          </a>
          <h1>{user && `(${user.dob.age} years)`}</h1>
        </div>
        <hr />
        <div className={st.userName}>
          <CopySvg className={st.copySvg} />
          <a>{user && `${user.email}`}</a>
        </div>
        <div className={st.userName}>
          <CopySvg className={st.copySvg} />
          <a>{user && `${user.phone}`}</a>
        </div>
        <div className={st.userName}>
          <CopySvg className={st.copySvg} />
          <span>
            {user &&
              `${user.location.country} ${user.location.state} ${user.location.street.number}
              ${user.location.street.name} ${user.location.postcode}`}
          </span>
        </div>
        <hr />
        <div className={st.nationality}>
          <h1>{user && `${user.nat}`}</h1>
        </div>
      </div>
    </div>
  );
}
