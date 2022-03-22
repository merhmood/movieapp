import { useState, useEffect } from "react";
import axios from "axios";

interface DataInterface {
  Title: string;
}

function useFetch(apiAddress: string) {
  const [error, setError] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [data, setData] = useState<Array<DataInterface>>([]);
  useEffect(() => {
    axios
      .get(apiAddress)
      .then((data) => {
        //due to insufficient data, data was duplicated
        interface DataObject {
          Title: string;
        }
        const setValue = [];
        const dataObject: DataObject = { Title: data.data.Title };

        for (let i = 0; i < 10; i++) {
          setValue.push(dataObject);
        }
        console.log(setValue);
        if (setValue !== []) {
          setData(setValue);
        }
      })
      .then(() => setDataLoading(false))
      .catch(() => setError(true));
  }, [apiAddress]);
  return { error, dataLoading, data };
}
export default useFetch;
