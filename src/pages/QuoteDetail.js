import { useParams, Route } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}></Route>
    </>
  );
};

export default QuoteDetail;
