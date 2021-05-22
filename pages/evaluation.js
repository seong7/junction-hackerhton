import axios from 'axios';
import { useEffect, useState } from 'react';
import Close from '../public/Close';
import GoBack from '../public/GoBack';
import Star from '../public/Star';
import { baseURL } from './api/base';

const mr2 = { marginRight: '5px' };

const Evaluation = ({ busId = 14 }) => {
  const [form, setForm] = useState({
    point: 0,
    speedPoint: 0,
    kindPoint: 0,
    memo: '',
  });
  const [current, setCurrent] = useState(1);

  const handleChangeRate = (e) => {
    setForm({ ...form, point: Number(e.currentTarget.dataset.value) });
  };

  const handleChangeSpeed = (e) => {
    setForm({ ...form, speedPoint: Number(e.currentTarget.dataset.value) });
  };

  const handleChangeKind = (e) => {
    setForm({ ...form, kindPoint: Number(e.currentTarget.dataset.value) });
  };

  const handleChangeMemo = (e) => {
    setForm({ ...form, memo: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    const token = localStorage.getItem('jwt');
    for (const key in form) {
      params.append(key, form[key]);
    }
    try {
      const res = await axios.post(`${baseURL}/evaluation/${busId}`, params, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200 || res.status === 201) {
        alert('평가에 참여해주셔서 감사합니다.');
        location.href = '/';
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401) {
        alert('권한이 존재하지 않습니다');
        localStorage.removeItem('jwt');
        location.href = '/';
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) location.href = '/';
  });

  return current === 1 ? (
    <div className='fade-in' style={{ height: '100%' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <div
          onClick={() => (location.href = '/')}
          style={{ width: '90%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <Close />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1
            style={{ color: '#256B93', letterSpacing: '-1.3px', fontSize: '20px', fontWeight: 600 }}
          >
            버스기사님을 평가해주세요.
          </h1>
          <div style={{ display: 'flex' }}>
            <div onClick={handleChangeRate} style={mr2} data-value={1}>
              <Star isFill={form.point > 0 ? true : false} />
            </div>
            <div onClick={handleChangeRate} style={mr2} data-value={2}>
              <Star isFill={form.point > 1 ? true : false} />
            </div>
            <div onClick={handleChangeRate} style={mr2} data-value={3}>
              <Star isFill={form.point > 2 ? true : false} />
            </div>
            <div onClick={handleChangeRate} style={mr2} data-value={4}>
              <Star isFill={form.point > 3 ? true : false} />
            </div>
            <div onClick={handleChangeRate} style={mr2} data-value={5}>
              <Star isFill={form.point > 4 ? true : false} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button
            style={{
              width: '291px',
              height: '57px',
              border: '3px solid #42B6F8',
              borderRadius: '10px',
              fontSize: '22px',
              color: '#42B6F8',
              marginBottom: '20px',
            }}
            onClick={(e) => {
              e.preventDefault();
              location.href = '/';
            }}
          >
            그만 평가할래요
          </button>
          <button
            style={{
              width: '291px',
              height: '57px',
              background: '#42B6F8',
              borderRadius: '10px',
              fontSize: '22px',
              color: '#fff',
            }}
            onClick={(e) => {
              e.preventDefault();
              setCurrent(2);
            }}
          >
            더 평가해볼래요
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className='fade-in' style={{ height: '100%' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <div
          style={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            onClick={() => {
              setCurrent(1);
              setForm({
                point: 0,
                speedPoint: 0,
                kindPoint: 0,
              });
            }}
          >
            <GoBack />
          </div>
          <Close />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1
            style={{ color: '#256B93', letterSpacing: '-1.3px', fontSize: '20px', fontWeight: 600 }}
          >
            기사님의 운전속도가 적당했나요?
          </h1>
          <div
            style={{
              display: 'flex',
              width: '100%',
              paddingBottom: '25px',
              borderBottom: '1px solid #BDBDBD',
            }}
          >
            <div onClick={handleChangeSpeed} style={mr2} data-value={1}>
              <Star isFill={form.speedPoint > 0 ? true : false} />
            </div>
            <div onClick={handleChangeSpeed} style={mr2} data-value={2}>
              <Star isFill={form.speedPoint > 1 ? true : false} />
            </div>
            <div onClick={handleChangeSpeed} style={mr2} data-value={3}>
              <Star isFill={form.speedPoint > 2 ? true : false} />
            </div>
            <div onClick={handleChangeSpeed} style={mr2} data-value={4}>
              <Star isFill={form.speedPoint > 3 ? true : false} />
            </div>
            <div onClick={handleChangeSpeed} style={mr2} data-value={5}>
              <Star isFill={form.speedPoint > 4 ? true : false} />
            </div>
          </div>
          <h1
            style={{
              color: '#256B93',
              paddingTop: '20px',
              letterSpacing: '-1.3px',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            기사님이 친절하게 응대해주셨나요?
          </h1>
          <div
            style={{
              display: 'flex',

              paddingBottom: '25px',
              width: '100%',
              borderBottom: '1px solid #BDBDBD',
            }}
          >
            <div onClick={handleChangeKind} style={mr2} data-value={1}>
              <Star isFill={form.kindPoint > 0 ? true : false} />
            </div>
            <div onClick={handleChangeKind} style={mr2} data-value={2}>
              <Star isFill={form.kindPoint > 1 ? true : false} />
            </div>
            <div onClick={handleChangeKind} style={mr2} data-value={3}>
              <Star isFill={form.kindPoint > 2 ? true : false} />
            </div>
            <div onClick={handleChangeKind} style={mr2} data-value={4}>
              <Star isFill={form.kindPoint > 3 ? true : false} />
            </div>
            <div onClick={handleChangeKind} style={mr2} data-value={5}>
              <Star isFill={form.kindPoint > 4 ? true : false} />
            </div>
          </div>

          <h1
            style={{
              color: '#256B93',
              paddingTop: '20px',
              letterSpacing: '-1.3px',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            다른 의견이 있다면 적어주세요!
          </h1>
          <div
            style={{
              display: 'flex',

              paddingBottom: '25px',
              width: '100%',
              borderBottom: '1px solid #BDBDBD',
            }}
          >
            <textarea
              style={{
                width: '100%',
                height: '150px',
                border: '3px solid #42B6F8',
                borderRadius: '10px',
              }}
              onChange={handleChangeMemo}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button
            style={{
              width: '291px',
              height: '57px',
              background: '#42B6F8',
              borderRadius: '10px',
              fontSize: '22px',
              color: '#fff',
            }}
            onClick={handleSubmit}
          >
            다 했어요!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Evaluation;
