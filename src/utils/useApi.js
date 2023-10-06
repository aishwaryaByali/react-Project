import { useEffect, useState } from "react";

const useApi = (api) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const apiData = await fetch(api);
    const jsonData = await apiData.json();
    const restoList =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setData(restoList);
  };
  return data;
};

export default useApi;
