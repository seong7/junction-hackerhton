const Welcome = () => {
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
          <h1 style={{ color: '#256B93', fontSize: '20px' }}>회원가입이 완료되었습니다.</h1>
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
          onClick={(e) => {
            e.preventDefault();
            location.href = '/sign-in';
          }}
        >
          환영합니다!
        </button>
      </form>
    </div>
  );
};

export default Welcome;
