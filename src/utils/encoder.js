import CryptoJS from "crypto-js";

export const base64encode = (url) => {
    const parsed = CryptoJS.enc.Utf8.parse(url);
    const encoded = CryptoJS.enc.Base64.stringify(parsed);
    return encoded
}