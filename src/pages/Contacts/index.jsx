/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsSelector } from '@/redux/selectors';
import '../../assets/images/logo512.png';
import { debounce } from 'lodash';
import Header from '@/components/Header';
import SearchPanel from '@/components/SearchPanel';
import User from '@/components/User';
import { getContacts } from '@/redux/actions/user';
import { Statistic } from '@/components';
import st from './styles.module.scss';

export default function Contacts() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [tab, setTab] = useState(true);
  const data = useSelector(getContactsSelector);
  const countries = data && [
    ...new Set(data.map((item) => item.location.country)),
  ];
  const filteredData =
    data &&
    data.filter((contact) => {
      const {
        name: { first, last },
      } = contact;
      return (
        `${first} ${last}`
          .toLowerCase()
          .includes(filters.search ? filters.search.toLowerCase() : '') &&
        (filters.gender ? filters.gender === contact.gender : true) &&
        (filters.countries
          ? filters.countries === contact.location.country
          : true)
      );
    });

  const handleFullName = debounce(
    (e) => setFilters({ ...filters, search: e }),
    500,
  );

  // debugger;
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={st.contactsPage}>
      <Header />
      <div className={st.content}>
        <div className={st.viewMenu}>
          <h1>Contacts</h1>
          <button onClick={() => console.log(setTab(!tab))}>tab view</button>
        </div>
        <SearchPanel
          handleFullName={handleFullName}
          handleGender={(e) => setFilters({ ...filters, gender: e })}
          handleNationality={(e) => setFilters({ ...filters, countries: e })}
          handleClear={() => setFilters({})}
          countries={countries}
        />
        <div className={st.flex}>
          {filteredData && filteredData.map((item) => <User user={item} />)}
        </div>
      </div>
      <Statistic />
    </div>
  );
}
