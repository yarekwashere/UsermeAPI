import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogoSvg } from '@/assets/icons';
import { createAccount } from '@/redux/actions/accounts';
import { PROFILE_ROUTE } from '@/constants/routes';
// import { Button } from 'antd';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
// import logoimg from '../../assets/images/logo192.png';
import 'antd/dist/antd.css';
import st from './styles.module.scss';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(createAccount('test'));
  }, [dispatch]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    history.push(PROFILE_ROUTE);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={st.App}>
      <Header showModal={showModal} />
      <div className={st['App-body']}>
        <LogoSvg className={st['App-logo']} />
        <h1>yyaarreekk</h1>
      </div>
      <div className={st['App-footer']}>
        <p>2021 © Wezom React-Redux Test</p>
      </div>
      <Modal
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      />
    </div>
  );
}

export default App;
