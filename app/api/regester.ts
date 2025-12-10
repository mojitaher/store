import axios from "axios";
// https://moviesapi.codingfront.dev/api/v1/register
interface regesterProps {
  email: string;
  pass: string;
  username: string;
}
export default async function regesterApi({
  email,
  pass,
  username,
}: regesterProps) {
  try {
    const res = await axios.post(
      "https://moviesapi.codingfront.dev/api/v1/register",
      {
        email,
        name: username,
        password: pass,
      }
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("ERROR DATA:", error.response?.data);
  }
}
