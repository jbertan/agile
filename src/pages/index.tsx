import Head from "next/head";
import { Inter } from "next/font/google";
import StatementComponent from "@/components/statement";
import MailComponent from "@/components/mail";
import { datas, _categories } from "@/helper/database";
import { useState, useReducer } from "react";
import { reducerFunctions, initialReducers } from "@/helper/reducer";
import RadarContainer from "@/components/radarcontainer";
import Pagination from "@mui/material/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [result, setResult] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const [tasks, dispatch] = useReducer(reducerFunctions, initialReducers);
  const [page, setPage] = useState<number>(1);
  const [resultArray, setResultArray] = useState<
    {
      categories: _categories;
      value: number;
    }[]
  >([]);

  const resultHandler = () => {
    resultArray.map((res) => {
      if (res) {
        dispatch({ type: res.categories, payload: res.value });
      }
      setResult(!result);
    });
  };
  const submitHandler = (e: string) => {
    setMail(e);
  };

  const renderItems = () => {
    const pageByItems = 5;
    const renderItems = [];
    const start = pageByItems * (page - 1);
    const end = start + pageByItems;
    const items = datas.map((data, i) => (
      <StatementComponent
        key={data.id}
        statement={data.statement}
        setResultArray={setResultArray}
        indexArray={i}
        resultArray={resultArray}
        categories={data.categories}
        dispatch={dispatch}
        tasks={tasks}
      />
    ));
    for (let i = start; i < end; i++) {
      renderItems.push(items[i]);
    }
    return renderItems;
  };
  console.log(tasks);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        {result ? (
          <RadarContainer tasks={tasks} />
        ) : mail ? (
          <>
            <h1 className="header">Agile Survey</h1>
            {renderItems()}
            {page === 7 && (
              <button onClick={resultHandler} className="button right">
                Result &rArr;
              </button>
            )}

            <Pagination
              className="top-margin"
              count={Math.ceil(35 / 5)}
              page={page}
              color="primary"
              onChange={(event, value) => setPage(value)}
              variant="outlined"
            />
          </>
        ) : (
          <MailComponent setMail={submitHandler} dispatch={dispatch} />
        )}
      </main>
    </>
  );
}
