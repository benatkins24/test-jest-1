import { get } from "axios";

const fetchData = async (id) => {
  const results = await get(`https://jsonplaceholder.typicode.com/todos/${id}`);
   return results.data;
};

//fetchData(1);

export default fetchData;
