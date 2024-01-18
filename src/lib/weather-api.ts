import axios from "axios";

export async function searchCity(city: string) {
  const options = {
    method: "GET",
    url: `https://open-weather13.p.rapidapi.com/city/${city}`,
    headers: {
      "X-RapidAPI-Key": "915623c965msh0e0766d40e62bddp1ed449jsn354f6c9eae13",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}
