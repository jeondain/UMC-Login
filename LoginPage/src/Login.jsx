import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserId, setUserPassword } from "./loginActions";

export default function Login() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.login.id);
  const pw = useSelector((state) => state.login.pw);
  const [isLoading, setIsLoading] = useState(false);

  const handleId = (e) => {
    dispatch(setUserId(e.target.value));
  };

  const handlePw = (e) => {
    dispatch(setUserPassword(e.target.value));
  };

  const onClickConfirmButton = async (e) => {
    if (id === '' || pw === '') {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return; // submit 이벤트 종료
    }

    try {
      setIsLoading(true);

      const res = await axios.post("http://localhost:8000/user/login", {
        id: id,
        pw: pw,
      });

      console.log(res.data);
      console.log(res.data.isSuccess);

      if (res.data.isSuccess) {
        alert("로그인에 성공했습니다.");
        localStorage.setItem('token', res.data.result.AccessToken); // 토큰 저장
        localStorage.setItem('id', res.data.result.userId); // ID 저장
      }

      // 통신 완료 후 로딩 해제
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    catch (err) {
      alert(err);
    }
  };

  return (
    <div className="page">
      <div className="titleWrap">아이디와 비밀번호를 입력해주세요</div>

      <div className="contentWrap">
        <div className="inputTitle">id</div>
        <div className="inputWrap">
          <input className="input"
            type="text"
            value={id}
            onChange={handleId}
          />
        </div>

        <div className="inputTitle">password</div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            value={pw}
            onChange={handlePw}
          />
        </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} className="bottomButton" disabled={isLoading}>
          {isLoading ? 'Loading...' : '확인'}
        </button>
      </div>
    </div>
  );
}
