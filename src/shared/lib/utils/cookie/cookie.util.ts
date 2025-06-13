// get cookie
// NAME - cookie name
export const getCookie = (name: string) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// create cookie
// KEY - cookie name
// VALUE - cookie value
// MINUTES - cookie expiration time in minutes
export const createCookie = ( key: string, value: string, minutes: number): void => {
  const now = new Date();
  
  now.setTime(now.getTime() + minutes * 60 * 1000);
  const expires = `expires=${now.toUTCString()}`;
  
  document.cookie = `${key}=${value}; ${expires}; path=/;`;
}

// delete cookie
// KEY - cookie name
export const deleteCookie = (key: string): void => {
  createCookie(key, "", -1);
}