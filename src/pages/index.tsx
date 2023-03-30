import Head from "next/head";
import { Open_Sans, Inter, Montserrat } from "next/font/google";
import StatementComponent from "@/components/statement";
import MailComponent from "@/components/mail";
import { datas, _categories } from "@/helper/database";
import { useState, useReducer, useEffect } from "react";
import { reducerFunctions, initialReducers } from "@/helper/reducer";
import RadarContainer from "@/components/radarcontainer";
import Pagination from "@mui/material/Pagination";
import { createContact, getContacts, shortCut } from "@/helper/hubspot";
import CircularProgressWithLabel from "@/components/circular-progress-with-label";
import ScreenResolution from "@/components/screenresolution";
import NextButton from "@/components/nextbutton";
import PrevButton from "@/components/prevbutton";
const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat-font",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans-font",
});

export default function Home() {
  //const [items, setItems] = useState<any>([]);
  const [animationEndClass, setAnimationEndClass] = useState<string>("");
  const [animationStartClass, setAnimationStartClass] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const [tasks, dispatch] = useReducer(reducerFunctions, initialReducers);
  const [page, setPage] = useState<number>(0);
  const [resultArray, setResultArray] = useState<
    {
      statement: string;
      categories: _categories;
      value: number;
    }[]
  >([]);

  const resultHandler = async () => {
    //console.log(resultArray);
    resultArray.map((res) => {
      if (res) {
        dispatch({ type: res.categories, payload: res.value });
      }
      setResult(!result);
    });
    console.log(resultArray);
    try {
      const response = await createContact(resultArray, mail);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = (e: string) => {
    setMail(e);
  };
  const changePage = () => {
    setPage(page + 1);
  };
  const changePageBack = () => {
    setPage(page - 1);
  };
  const triggerAnimation = () => {
    console.log("triggerAnimation");
    setAnimationStartClass("animateTop");
    setTimeout(() => {
      setAnimationStartClass("");
      setAnimationEndClass("");
    }, 500); // Reset the animation class after the animation duration (2s in this example)
  };
  const triggerAnimationNegative = () => {
    console.log("triggerAnimationBottom");
    setAnimationEndClass("animateBottom");
    setTimeout(() => {
      setAnimationStartClass("");
      setAnimationEndClass("");
    }, 500); // Reset the animation class after the animation duration (2s in this example)
  };
  // (1) Enable Pagination RENDER PER PAGE MATH
  /*  const renderItems = () => {
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
    ));*/
  /*  for (let i = start; i < end; i++) {
      renderItems.push(items[i]);
    } 
    return items;
  };*/

  //Test all slider movements with dispatchs
  //console.log(tasks);

  return (
    <>
      <Head>
        <title>Agile On Rails</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        data-testid="heading"
        className={`container ${montserrat.variable} ${open_sans.variable}`}
      >
        {/*  <ScreenResolution /> */}
        {result ? (
          <RadarContainer tasks={tasks} />
        ) : mail ? (
          <>
            <h1 className="header">Agile Maturity Assesment</h1>
            <div className="statements-holder">
              <div className="statements-holder__startfilter">
                <div className={`statements-holder__start`}>
                  {datas.map((data, i) => {
                    return (
                      i < page && (
                        <h3
                          key={i}
                          className={`statement-h3 ${animationStartClass} ${animationEndClass} `}
                        >
                          {data.statement}
                        </h3>
                      )
                    );
                  })}
                </div>
              </div>
              <div className="statements-holder__mid">
                {datas.map((data, i) => {
                  return (
                    i === page && (
                      <div className="statement-component">
                        <CircularProgressWithLabel
                          className="statement-component__progress-bar"
                          value={(i / (datas.length - 1)) * 100}
                        />
                        <div className="statement-component__statement">
                          <StatementComponent
                            key={data.id}
                            statement={data.statement}
                            setResultArray={setResultArray}
                            indexArray={i}
                            resultArray={resultArray}
                            categories={data.categories}
                            dispatch={dispatch}
                            tasks={tasks}
                            changePage={changePage}
                          />
                        </div>

                        {datas.length - 1 !== i ? (
                          (console.log(datas.length, i),
                          (
                            <div className="statement-component__button">
                              {page > 0 && (
                                <PrevButton
                                  changePageBack={changePageBack}
                                  triggerAnimationNegative={
                                    triggerAnimationNegative
                                  }
                                />
                              )}
                              <NextButton
                                changePage={changePage}
                                triggerAnimation={triggerAnimation}
                              >
                                Next
                              </NextButton>
                            </div>
                          ))
                        ) : (
                          <button
                            onClick={resultHandler}
                            className="statement-component__button next-button "
                          >
                            Result &rArr;
                          </button>
                        )}
                      </div>
                    )
                  );
                })}
              </div>{" "}
              <div className="statements-holder__endfilter">
                <div
                  className={`statements-holder__end ${animationStartClass} ${animationEndClass}`}
                >
                  {datas.map((data, i) => {
                    return (
                      i > page && (
                        <h3 key={i} className="statement-h3">
                          {data.statement}
                        </h3>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* (2)RENDER DIVIDED PER PAGINATION
            {renderItems()} 
             (3)RENDER RESULT BUTTON IF OAGE IS 7
            {page === 7 && (
              <button onClick={resultHandler} className="button right">
                Result &rArr;
              </button>
            )} 

           (4)PAGINATION BAR
            <Pagination
              className="top-margin"
              count={Math.ceil(35 / 5)}
              page={page}
              color="primary"
              onChange={(event, value) => setPage(value)}
              variant="outlined"
            /> */

          <MailComponent setMail={submitHandler} dispatch={dispatch} />
        )}
      </main>
    </>
  );
}
