const MainSignUpContainer = ({ isHandicapped, handleClickRadio, handleChangeCurrent }) => (
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
        <h1 style={{ fontSize: '20px', color: '#256B93' }}>교통약자이신가요?</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor='is-handicapped-true'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '291px',
              height: '57px',
              border: '3px solid #42B6F8',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#256B93',
              marginBottom: '10px',
              ...(isHandicapped
                ? { border: '3px solid #42B6F8' }
                : { border: '3px solid #bdbdbd', color: '#bdbdbd' }),
            }}
          >
            네 교통약자 입니다.
          </label>
          <input
            id='is-handicapped-true'
            style={{ display: 'none' }}
            name='is-handicapped'
            type='radio'
            value
            onClick={handleClickRadio}
          />
          <label
            htmlFor='is-handicapped-false'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '291px',
              height: '57px',
              border: '3px solid #42B6F8',
              borderRadius: '10px',
              fontSize: '20px',
              color: '#256B93',
              ...(!isHandicapped
                ? { border: '3px solid #42B6F8' }
                : { border: '3px solid #bdbdbd', color: '#bdbdbd' }),
            }}
          >
            아니요. 저는 버스기사 입니다.
          </label>
          <input
            id='is-handicapped-false'
            style={{ display: 'none' }}
            name='is-handicapped'
            type='radio'
            value={false}
            onClick={handleClickRadio}
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
        onClick={() => handleChangeCurrent(2)}
      >
        다음
      </button>
    </form>
  </div>
);

export default MainSignUpContainer;
