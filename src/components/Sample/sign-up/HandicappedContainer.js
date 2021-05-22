const HandicappedContainer = ({
  form,
  handleChangeName,
  disabledType,
  handleChangeDisabledType,
  handleChangeCurrent,
  handleChangeCertificate,
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
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>이름을 입력해주세요.</h1>
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
              name='name'
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <h1 style={{ fontSize: '20px', color: '#256B93' }}>어디가 불편하신가요?</h1>
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
                ...(disabledType === 'BLIND'
                  ? { border: '3px solid #42B6F8' }
                  : { border: '3px solid #bdbdbd', color: '#bdbdbd' }),
              }}
            >
              눈이 잘 안보여요.
            </label>
            <input
              id='is-handicapped-true'
              style={{ display: 'none' }}
              name='is-handicapped'
              type='radio'
              value='BLIND'
              onClick={(e) => handleChangeDisabledType(e.target.value)}
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
                ...(disabledType === 'WHEELCHAIR'
                  ? { border: '3px solid #42B6F8' }
                  : { border: '3px solid #bdbdbd', color: '#bdbdbd' }),
              }}
            >
              휠체어를 타고 다녀요.
            </label>
            <input
              id='is-handicapped-false'
              style={{ display: 'none' }}
              name='is-handicapped'
              type='radio'
              value='WHEELCHAIR'
              onClick={(e) => handleChangeDisabledType(e.target.value)}
            />
            <h1 style={{ fontSize: '20px', color: '#256B93', marginTop: '40px' }}>
              장애인 등록증을 업로드해주세요.
            </h1>
            <div>
              <div style={{ display: 'flex', marginBottom: '5px' }}>
                <label
                  htmlFor='certificate'
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '291px',
                    height: '57px',
                    border: '3px solid #42B6F8',
                    borderRadius: '10px',
                    fontSize: '20px',
                    color: '#42B6F8',
                    ...(!form.photo
                      ? { border: '3px solid #42B6F8' }
                      : { border: '3px solid #bdbdbd', color: '#bdbdbd' }),
                  }}
                >
                  {!form.photo ? '등록증 이미지 업로드하기' : '파일이 선택되었습니다.'}
                </label>
                <input
                  type='file'
                  id='certificate'
                  className='placeholder'
                  placeholder='등록증 이미지 업로드하기'
                  style={{
                    display: 'none',
                  }}
                  onChange={(e) => handleChangeCertificate(e.target.files[0])}
                />
              </div>
              <span style={{ color: '#256B93', fontSize: '9px' }}>
                서비스가 악용되는 것을 막기 위해서 장애인 등록증 이미지를 받고 있습니다.
              </span>
            </div>
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
            const res = await handleSubmit(e);
            if (res.status === 200 || res.status === 201) {
              handleChangeCurrent(4);
            } else {
              alert('회원가입에 실패하였습니다.\n다시 시도해주세요.');
            }
          }}
        >
          다음
        </button>
      </form>
    </div>
  );
};

export default HandicappedContainer;
