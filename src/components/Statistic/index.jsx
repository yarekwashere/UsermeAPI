/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { getContactsSelector } from '@/redux/selectors';
import st from './styles.module.scss';

export default function Statistic() {
  const data = useSelector(getContactsSelector);
  let male = 0;
  let female = 0;
  if (data) {
    data.map((item) => (item.gender === 'male' ? male++ : female++));
  }
  console.log(male, female);
  if (!data) return null;
  return (
    <div className={st.box}>
      <div className={st.boxContent}>
        <div className={st.title}>
          <h1>Statistics</h1>
        </div>
        <div className={st.statisticBox}>
          <div className={st.collectionSize}>
            <p>Collection size</p>
            <span>{data.length}</span>
          </div>
          <div className={st.males}>
            <div className={st.statisticTitle}>
              <p>Males</p>
              <span>{male}</span>
            </div>
            <div className={st.statisticTitle}>
              <p>Females</p>
              <span>{female}</span>
            </div>
            <div className={st.statisticTitle}>
              <p>Indeterminate</p>
              <span>0</span>
            </div>
          </div>
          <p>Women predomiante</p>
        </div>
        <div className={st.nationBox}>
          <p>Nationalities</p>
          <div className={st.nationStats}>
            <h3>New Zealander</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
