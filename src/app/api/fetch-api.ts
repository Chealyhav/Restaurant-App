import { API_URL } from "./urls";

export async function fetchAPI(
  path: string,
  options = {}
) {
  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    };

    const requestUrl = `${API_URL}/api${path}`;
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Please check your server");
  }
}




export async function DataContent() {
  const response = await fetchAPI("/content?populate=*", {
    next: { revalidate: 1 },
  });
  return response;
}


export async function DataProfile() {
  const response = await fetchAPI("/profile?populate=*", {
    next: { revalidate: 1 },
  });
  return response;
}
 

export async function DataCategory() {
  const response = await fetchAPI("/categories?populate[products][populate]=*", {
    next: { revalidate: 1 },
  });
  return response;
}