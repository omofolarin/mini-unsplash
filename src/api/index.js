import axios from "axios";

const apiInstance = axios.create();
const ACCESS_KEY = "5ja_A-ozjl0L6VNG85ea0rDlZWHk2CGMlhsRC8b0TDM";

const Authorization = `CLIENT-ID ${ACCESS_KEY}`;
apiInstance.defaults.baseURL = "https://api.unsplash.com/";
apiInstance.defaults.headers.post["Content-Type"] = "application/jon";
apiInstance.defaults.headers.common["Authorization"] = Authorization;
export const fetchContentApi = async () => {
  try {
    const res = await apiInstance.get(`/photos?client_id=${ACCESS_KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchContentApi = async (keywords) => {
  try {
    const res = await apiInstance.get(
      `/search/photos?query=${keywords}&client_id=${ACCESS_KEY}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
