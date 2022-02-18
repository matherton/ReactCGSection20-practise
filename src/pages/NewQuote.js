import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";

const NewQuote = () => {
  const history = useHistory();
  useHttp();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

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
