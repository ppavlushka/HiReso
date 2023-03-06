import axios from "axios";

/* function sleep(delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
} */

export async function track() {
  return axios
    .post(`/api/track`, {
      params: {},
    })
    .then((response) => response.data);
}
