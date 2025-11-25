import axios from "axios";
// https://moviesapi.codingfront.dev/api/user

export default async function Auth(token: string) {
  const res = await axios.get("https://moviesapi.codingfront.dev/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);
  return res.data;
}
