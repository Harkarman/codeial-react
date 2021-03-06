export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //* "user name" -> 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); //* abc123 -> abc%2020123
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&"); //* "username=abc&password=123"
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem("token");
}
