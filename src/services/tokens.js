const h = new Headers();

h.append("Authorization", `Client-ID ${process.env.REACT_APP_CLIENT_ID}`);

const baseURL = "https://api.unsplash.com";

export { h, baseURL };
