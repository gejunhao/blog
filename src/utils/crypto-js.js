import CryptoJS from 'crypto-js'
// 十六位十六进制数作为密钥
const secret_key = CryptoJS.enc.Utf8.parse('1234123412341234')
// 十六位十六进制数作为密钥偏移量
const secret_iv = CryptoJS.enc.Utf8.parse('1234123412341234')
export function encrypt(data) {
  if (typeof data === 'object') {
    try {
      // eslint-disable-next-line no-param-reassign
      data = JSON.stringify(data)
    } catch (error) {
      console.log('encrypt error:', error)
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data)
  const encrypted = CryptoJS.AES.encrypt(dataHex, secret_key, {
    iv: secret_iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.ciphertext.toString()
}
export function decrypt(data) {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(data)
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(str, secret_key, {
    iv: secret_iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
