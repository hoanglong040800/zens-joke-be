import { CookieKey } from '../constant';

export const parseJsonCookie = <T>(cookies: object, cookieKey: CookieKey): T => {
  const cookieValue: string = cookies?.[cookieKey];

  if (!cookieValue) {
    return null;
  }

  return JSON.parse(cookieValue);
};
