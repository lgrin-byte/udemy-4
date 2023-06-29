import { useEffect } from "react";
import { useSearchParams} from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query'); 

  useEffect(() => console.log(query), [query]);
  return (
    <div>
      <h1>검색결과</h1>
      <h3>검색어 : {query}</h3>
    </div>
  );
};
export default SearchResult;
