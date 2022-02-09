import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const DUMMY_DATA = [
  {
    id: "p1",
    author: "Mark",
    text: "Learning React is fun!",
  },
  {
    id: "p2",
    author: "Matthew",
    text: "Learning to ride a bike is fun!",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  return (
    <>
      <h1>Quote Detail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
