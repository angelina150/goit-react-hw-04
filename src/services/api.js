import axios from "axios";

export default async function getPhotosBySearchValue(searchValue, page) {
  const url = "https://api.unsplash.com/search/photos";
  const key = "BL2HusSZWztYq8lqWlRpvD8O3_k14PB-Mwf4XMPl5hY";
  try {
    const response = await axios.get(url, {
      params: {
        query: searchValue,
        client_id: key,
        page: page,
        per_page: 12,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
