/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '@/redux/actions/user';
import { CopySvg } from '@/assets/icons';
import Header from '@/components/Header';
import { getProfileSelector } from '@/redux/selectors';
import st from './styles.module.scss';

export default function Profile() {
  const data = useSelector(getProfileSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div>
      <Header />
      <div className={st.body}>
        <div className={st.container}>
          <div className={st.name}>
            <h1>Profile</h1>
          </div>
          <div className={st.profile}>
            <div className={st.userImage}>
              <img src={data && `${data.picture.large}`} alt="s" />
            </div>
            <div className={st.userInfo}>
              <div className={st.userName}>
                <h1>
                  {data &&
                    `${data.name.title} ${data.name.first} ${data.name.last}`}
                </h1>
                <h2>{data && `(${data.dob.age} years)`}</h2>
              </div>
              <hr />
              <div className={st.userName}>
                <CopySvg className={st.copySvg} />
                <a>{data && `${data.email}`}</a>
              </div>
              <div className={st.userName}>
                <CopySvg className={st.copySvg} />
                <a>{data && `${data.phone}`}</a>
              </div>
              <div className={st.userName}>
                <CopySvg className={st.copySvg} />
                <a>
                  {data &&
                    `${data.location.country} ${data.location.state} ${data.location.street.number}
                     ${data.location.street.name} ${data.location.postcode}`}
                </a>
              </div>
              <hr />
              <div className={st.nationality}>
                <a>{data && `${data.nat}`}</a>
              </div>
            </div>
          </div>
        </div>
        <div className={st.footer}>
          <p>2021 © Wezom React-Redux Test</p>
        </div>
      </div>
    </div>
  );
}
