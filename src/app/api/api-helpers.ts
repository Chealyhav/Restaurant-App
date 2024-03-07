import { API_URL } from "./urls";

export function getStrapiMedia(url: string | undefined) {
  if (url == null) {
    return null;
  }
  return `${API_URL}${url}`;
}
