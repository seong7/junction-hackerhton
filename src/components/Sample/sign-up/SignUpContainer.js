const SignUpContainer = ({
  handleChangeCurrent,
  handleChangeEmail,
  handleChangePassword,
  handleChangePasswordCheck,
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
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>아이디를 입력해주세요.</h1>
            <input
              className='placeholder'
              placeholder='아이디'
              onChange={(e) => handleChangeEmail(e.target.value)}
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                marginBottom: '20px',
                paddingLeft: '10px',
              }}
            />
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>비밀번호를 입력해주세요.</h1>
            <input
              type='password'
              className='placeholder'
              placeholder='비밀번호'
              onChange={(e) => {
                handleChangePassword(e.target.value);
              }}
              style={{
                border: '3px solid #42B6F8',
                borderRadius: '10px',
                width: '291px',
                height: '57px',
                marginBottom: '10px',
                paddingLeft: '10px',
              }}
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
          onClick={() => {
            handleChangeCurrent(3);
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default SignUpContainer;
