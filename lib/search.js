import axios from "axios";

/* function sleep(delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
} */

export async function search(url) {
  return axios
    .get(`/api/search-api`, {
      params: {
        url,
      },
    })
    .then((response) => response.data);
}
