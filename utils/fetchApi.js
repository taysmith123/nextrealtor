import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "b9e44450c9mshf53816a0ba9aa7dp18ecd3jsn1aec553db6db",
    },
  });
  return data;
};
