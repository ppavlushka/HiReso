import axios from "axios";

/* function sleep(delay = 300) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
} */

export async function track(images) {
  try {
    const response = await axios.post(`/api/track`, {
      images,
    });
    reloadSession();
    return response.data;
  } catch (error) {
    reloadSession();
    throw error;
  }
}

function reloadSession() {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
}
