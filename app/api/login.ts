import axios from "axios";

// https://moviesapi.codingfront.dev/oauth/token
interface loginProp {
  username: string;
  password: string;
}
export default async function LoginApi({ username, password }: loginProp) {
  try {
    const res = await axios.post(
      "https://moviesapi.codingfront.dev/oauth/token",
      {
        grant_type: "password",
        username,
        password,
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
