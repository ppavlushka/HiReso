import { SodiumPlus } from "sodium-plus";

// https://github.com/paragonie/sodium-plus#using-sodium-plus-in-your-projects
let sodium;
let key;
let nonce;

export async function initEncryption() {
  if (sodium) return;
  sodium = await SodiumPlus.auto();
  key = await sodium.crypto_secretbox_keygen();
  nonce = await sodium.randombytes_buf(24);
}
export async function encrypt(message) {
  const buffer = await sodium.crypto_secretbox(message, nonce, key);
  return buffer.toString("base64");
}

export async function decrypt(hash) {
  const buffer = Buffer.from(hash, "base64");
  const decrypted = await sodium.crypto_secretbox_open(buffer, nonce, key);
  return decrypted.toString("utf-8");
}

// (async function () {
//   // Select a backend automatically
//   let sodium = await SodiumPlus.auto();

//   let key = await sodium.crypto_secretbox_keygen();
//   let nonce = await sodium.randombytes_buf(24);
//   let message = "This is just a test message";
//   // Message can be a string, buffer, array, etc.

//   let ciphertext = await sodium.crypto_secretbox(message, nonce, key);
//   console.log(ciphertext);
//   let decrypted = await sodium.crypto_secretbox_open(ciphertext, nonce, key);
//   console.log(decrypted.toString("utf-8"));
// })();
