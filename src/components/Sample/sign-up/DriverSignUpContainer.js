const DriverSignUpContainer = ({
  handleChangeCurrent,
  handleChangeCompanyName,
  handleChangeBusId,
  handleChangeName,
  handleSubmit,
}) => {
  return (
    <div className='fade-in' style={{ height: '100%' }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px 0',
        }}
      >
        <h1 style={{ color: '#256B93', fontSize: '20px', fontWeight: 'bold' }}>회원가입</h1>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>버스 회사를 입력해주세요.</h1>
            <input
              className='placeholder'
              placeholder='회사이름'
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                marginBottom: '20px',
                paddingLeft: '10px',
              }}
              onChange={(e) => handleChangeCompanyName(e.target.value)}
            />
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>기사님 이름을 입력해주세요.</h1>
            <input
              className='placeholder'
              placeholder='홍길동'
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                marginBottom: '20px',
                paddingLeft: '10px',
              }}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>버스 번호를 입력해주세요.</h1>
            <input
              className='placeholder'
              placeholder='1234'
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                marginBottom: '20px',
                paddingLeft: '10px',
              }}
              onChange={(e) => handleChangeBusId(e.target.value)}
            />
          </div>
        </div>
        <button
          style={{
            width: '291px',
            height: '57px',
            background: '#42B6F8',
            borderRadius: '10px',
            fontSize: '22px',
            color: '#fff',
          }}
          onClick={async (e) => {
            e.preventDefault();
            const res = await handleSubmit(e);
            if (res.status === 200 || res.status === 201) handleChangeCurrent(4);
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default DriverSignUpContainer;
