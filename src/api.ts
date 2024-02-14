//fetcher fuction
//필수적으로 fetch promise를 리턴해야함

const Base_URL = `http://43.201.18.157`;

export function fetchApi(token: string) {
  return fetch(`${Base_URL}/actuator`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
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
