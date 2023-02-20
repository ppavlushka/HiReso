import axios from "axios";

function sleep(delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
}

export async function search(q) {
  return axios
    .get(`/api/search`, {
      params: {
        q,
      },
    })
    .then((response) => response.data);
}
