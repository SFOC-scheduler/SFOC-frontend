//fetcher fuction
//필수적으로 fetch promise를 리턴해야함

const Base_URL = `https://dev.sfoc.kro.kr`;

export function fetchApi(token: string) {
  return fetch(`${Base_URL}/actuator`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    response.json();
  });
  //header 검사를 해서 200이 아니면 그에맞는 조치를 취해라
  //400대 일때 body의 code를 보고 판단
  //code: 101 => login/reissue (api)
  //code: 102,103 => login page
}
export function fetchUserApi(token: string) {
  return fetch(`${Base_URL}/api/login/loginInfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status >= 400 && response.status <= 499) {
      return response.json();
    } else return response.json();
  });
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
