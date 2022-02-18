import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {}, [status]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);

    history.push("/quotes");
  };
  return (
    <>
      <h1>New Quote Page</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;
