import { useState } from 'react';
import SignUpContainer from '../src/components/Sample/sign-up/SignUpContainer';
import HandicappedContainer from '../src/components/Sample/sign-up/HandicappedContainer';
import Welcome from '../src/components/Sample/sign-up/Welcome';
import MainSignUpContainer from '../src/components/Sample/sign-up/MainSignUpContainer';
import DriverSignUpContainer from '../src/components/Sample/sign-up/DriverSignUpContainer';
import { baseURL } from '../pages/api/base';
import axios from 'axios';

const signUp = () => {
  const [isHandicapped, setIsHandicapped] = useState(true);
  const [disabledType, setDisabledType] = useState('BLIND');
  const [current, setCurrent] = useState(1);

  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'CLIENT',
  });

  const handleClickRadio = (e) => {
    setIsHandicapped(e.target.value === 'true' ? true : false);
    setForm(e.target.value === 'true' ? { ...form, role: 'CLIENT' } : { ...form, role: 'COMPANY' });
  };
  const handleChangeCurrent = (page) => {
    setCurrent(page);
  };
  const handleChangeDisabledType = (type) => {
    setDisabledType(type);
    setForm({ ...form, disabledType: type });
  };

  const handleChangeEmail = (value) => {
    setForm({ ...form, email: value });
  };
  const handleChangePassword = (value) => {
    if (isHandicapped) {
      setForm({ ...form, password: value, passwordCheck: value, disabledType: 'BLIND' });
    } else {
      setForm({ ...form, password: value, passwordCheck: value });
    }
  };
  const handleChangePasswordCheck = (value) => {
    setForm({ ...form, passwordCheck: value });
  };
  const handleChangeName = (value) => {
    setForm({ ...form, name: value });
  };
  const handleChangeCertificate = (value) => {
    setForm({ ...form, photo: value });
  };
  const handleChangeCompanyName = (value) => {
    setForm({ ...form, companyName: value });
  };
  const handleChangeBusId = (value) => {
    setForm({ ...form, busId: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let params = null;
    if (form.role === 'CLIENT') {
      params = new FormData();
    } else {
      params = new URLSearchParams();
    }
    for (const key in form) {
      params.append(key, form[key]);
    }
    const res = await axios.post(`${baseURL}/user/join`, params);
    return res;
  };

  return current === 1 ? (
    <MainSignUpContainer
      isHandicapped={isHandicapped}
      handleClickRadio={handleClickRadio}
      handleChangeCurrent={handleChangeCurrent}
    />
  ) : current === 2 && isHandicapped === true ? (
    <SignUpContainer
      handleChangeCurrent={handleChangeCurrent}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleChangePasswordCheck={handleChangePasswordCheck}
    />
  ) : current === 3 && isHandicapped === true ? (
    <HandicappedContainer
      form={form}
      handleChangeName={handleChangeName}
      disabledType={disabledType}
      handleChangeDisabledType={handleChangeDisabledType}
      handleChangeCurrent={handleChangeCurrent}
      handleChangeCertificate={handleChangeCertificate}
      handleSubmit={handleSubmit}
    />
  ) : current === 4 && isHandicapped === true ? (
    <Welcome />
  ) : current === 2 && isHandicapped === false ? (
    <SignUpContainer
      handleChangeCurrent={handleChangeCurrent}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleChangePasswordCheck={handleChangePasswordCheck}
    />
  ) : current === 3 && isHandicapped === false ? (
    <DriverSignUpContainer
      handleChangeCurrent={handleChangeCurrent}
      handleChangeCompanyName={handleChangeCompanyName}
      handleChangeName={handleChangeName}
      handleChangeBusId={handleChangeBusId}
      handleSubmit={handleSubmit}
    />
  ) : current === 4 && isHandicapped === false ? (
    <Welcome />
  ) : (
    <div></div>
  );
};

export default signUp;
