import { useEffect } from "react";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    date: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <>
      <h1>All Quotes page</h1>
      <QuoteList quotes={DUMMY_DATA} />
    </>
  );
};

export default AllQuotes;
