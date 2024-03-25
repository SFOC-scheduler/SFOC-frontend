import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";

//fetcher fuction
//필수적으로 fetch promise를 리턴해야함

const Base_URL = `https://dev.sfoc.kro.kr`;

export function storelocalToken(token: any) {
  localStorage.setItem("accessToken", token);
}

//header 검사를 해서 200이 아니면 그에맞는 조치를 취해라
//400대 일때 body의 code를 보고 판단
//code: 101 => login/reissue (api)
//code: 102,103 => login page

export function fetchUserApi(token: string) {
  return axios
    .get(`${Base_URL}/api/login/loginInfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      handleError(error);
    });
}

function handleError(error: any) {
  if (error.response && error.response.status === 400) {
    // 400 상태 코드인 경우: 토큰 갱신 시도
    switch (error.response.code) {
      case 101:
        return axios
          .get(`${Base_URL}/api/login/reissue`, {})
          .then((response) => {
            storelocalToken(response);
          });
      case 102:
        // 처리 로직
        break;
      case 103:
        // 처리 로직
        break;
      case 104:
        // 처리 로직
        break;
      case 105:
        // 처리 로직
        break;
      default:
        break;
    }
  } else {
    // 다른 종류의 오류인 경우 예외 처리
    console.error("Error handling request:", error);
    throw error; // 오류를 상위 호출자에게 전파
  }
}

// export function fetchCoinInfo(coinId: string) {
//   return fetch(`${Base_URL}/coins/${coinId}`).then((response) =>
//     response.json()
//   );
// }

// export function fetchCoinTickers(coinId: string) {
//   return fetch(`${Base_URL}/tickers/${coinId}`).then((response) =>
//     response.json()
//   );
// }

// export function fetchCoinHistory(coinId: string) {
//   const endDate = Math.floor(Date.now() / 1000);
//   const startDate = endDate - 60 * 60 * 24 * 7 * 2;
//   return fetch(
//     `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
//   ).then((response) => response.json());
// }
