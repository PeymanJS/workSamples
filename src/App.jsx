import React, { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";
import "./App.css";

const App = () => {


  // participant
  const [userName, setUserName] = useState(null);

  const [questionNumber, setQuestionNumber] = useState(1);

  const [stop, setStop] = useState(false);

  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "بخش عمده دیکشنری آکسفورد توسط چه کسی نوشته شده است؟",
      answers: [
        {
          text: "مستربین",
          correct: false,
        },
        {
          text: "یک کودک",
          correct: false,
        },
        {
          text: "یک قاتل",
          correct: true,
        },
        {
          text: "یک راننده تاکسی",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "یک مرغ برای تخم گذاری به چند عدد خروس نیاز دارد؟",
      answers: [
        {
          text: " 0 خروس",
          correct: true,
        },
        {
          text: "1 خروس",
          correct: false,
        },
        {
          text: "2 خروس",
          correct: false,
        },
        {
          text: "3 خروس",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "ضریب هوشی کدام یک از شخصیت های زیر از بقیه گزینه ها بیشتر است؟",
      answers: [
        {
          text: "مستربین",
          correct: true,
        },
        {
          text: "ایلان ماسک",
          correct: false,
        },
        {
          text: "باراک اوباما",
          correct: false,
        },
        {
          text: "بیل گیس",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "نماد عشق در کشور مراکش چیست؟",
      answers: [
        {
          text: "قلب",
          correct: false,
        },
        {
          text: " کبد",
          correct: true,
        },
        {
          text: " کلیه",
          correct: false,
        },
        {
          text: " معده",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: '"طاعون" از آثار مهم کدام نویسنده است؟',
      answers: [
        {
          text: "ارنست همینگوی",
          correct: false,
        },
        {
          text: "هرمان هسه   ",
          correct: false,
        },
        {
          text: " آلبرکامو",
          correct: true,
        },
        {
          text: " فرانس فانون ",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "سرعت دسترسی به کدام نوع حافظه بیشتر از بقیه گزینه  هاست؟ ",
      answers: [
        {
          text: "RAM",
          correct: false,
        },
        {
          text: "Cache ",
          correct: true,
        },
        {
          text: "Hard Disk ",
          correct: false,
        },
        {
          text: "USE flash ",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "کاربرد Pasdword hint در هنگام تنظیم حساب کاربری در ویندوز چیست؟ ",
      answers: [
        {
          text: "تنظیم رمز برای حساب کاربری",
          correct: false,
        },
        {
          text: "نمایش رمز تنظیم شده ",
          correct: false,
        },
        {
          text: " هیچکدام",
          correct: true,
        },
        {
          text: "گزینه 1 و 2 ",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: " چای قرمز برای کاهش ..... بسیار مفید است",
      answers: [
        {
          text: "میگرن",
          correct: false,
        },
        {
          text: "چربی خون ",
          correct: true,
        },
        {
          text: " قند خون",
          correct: false,
        },
        {
          text: " اعصاب",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "در کدام یک از کشورهای زیر مردم موظفند در تمامی ساعات روز با چهره خندان تردد کنند؟ ",
      answers: [
        {
          text: "ایتالیا",
          correct: true,
        },
        {
          text: " یمن",
          correct: false,
        },
        {
          text: " اسپانیا",
          correct: false,
        },
        {
          text: " ژاین",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: " کدام یک از غذاهای زیر برای اردک ها مضر است؟",
      answers: [
        {
          text: "گندم ",
          correct: false,
        },
        {
          text: " ذرت ",
          correct: false,
        },
        {
          text: "جو ",
          correct: false,
        },
        {
          text: " نان",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "خرطوم فیل چه تعداد عضله دارد؟ ",
      answers: [
        {
          text: "صد و پنجاه هزار عضله",
          correct: true,
        },
        {
          text: " هفتاد و پنج هزار عضله",
          correct: false,
        },
        {
          text: " صد و بیست و پنج هزار عضله",
          correct: false,
        },
        {
          text: " هفت هزار عضله",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " کدام یک از رنگ های زیر تا دهه 1800 میلادی به دلیل کمبود و گرانی رنگدانه‌ آن به اندازه طلا گران قیمت بود؟",
      answers: [
        {
          text: "سبز",
          correct: false,
        },
        {
          text: "سفید ",
          correct: false,
        },
        {
          text: " بنفس",
          correct: true,
        },
        {
          text: "خاکستری ",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "کدام یک از کشورهای زیر معروف به سرزمین خرگوش کوهی است؟ ",
      answers: [
        {
          text: "ایران",
          correct: false,
        },
        {
          text: " ایتالیا",
          correct: false,
        },
        {
          text: " ایسلند",
          correct: false,
        },
        {
          text: " اسپانیا",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "کدام یک از افراد زیر گیاه خوار بود و معتقد بود حیوانات حق زندگی دارند؟ ",
      answers: [
        {
          text: "محمود احمدی نژاد",
          correct: false,
        },
        {
          text: " آدولف هیتلر ",
          correct: true,
        },
        {
          text: " جان اف کندی",
          correct: false,
        },
        {
          text: " میخاییل گورپاف",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " معیار زیبایی در کشور تاجیکستان چیست؟",
      answers: [
        {
          text: "گیسو بلند",
          correct: false,
        },
        {
          text: "بینی بزرگ ",
          correct: false,
        },
        {
          text: " ابرو های پرپشت و پیوندی",
          correct: true,
        },
        {
          text: " ابرو های نازک و کم پشت",
          correct: false,
        },
      ],
    },
  ];

  const Amont = useMemo(
    () =>
      [
        { id: 1, amont: "$ 100" },
        { id: 2, amont: "$ 200" },
        { id: 3, amont: "$ 300" },
        { id: 4, amont: "$ 400" },
        { id: 5, amont: "$ 500" },
        { id: 6, amont: "$ 1000" },
        { id: 7, amont: "$ 2000" },
        { id: 8, amont: "$ 4000" },
        { id: 9, amont: "$ 8000" },
        { id: 10, amont: "$ 16000" },
        { id: 11, amont: "$ 32000" },
        { id: 12, amont: "$ 640000" },
        { id: 13, amont: "$ 125000" },
        { id: 14, amont: "$ 500000" },
        { id: 15, amont: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(Amont.find((m) => m.id === questionNumber - 1).amont);
    console.log(questionNumber)

  }, [Amont, questionNumber]);

  const AgainPlay = () => {
    if (questionNumber >= 5 && questionNumber <= 9) {
      setQuestionNumber(5)
      setStop(false)
    }
    else if (questionNumber >= 10 && questionNumber <= 18) {
      setQuestionNumber(10)
      return setStop(false)
    }
    else {
      setQuestionNumber(1)
      setStop(false)
    }

  }

  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <>
                <h1 className="endText">Your Earned is{earned}</h1>
                <button className="again" onClick={() => { AgainPlay() }}>Do you again play ?</button>
              </>

            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} QuestionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setstop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <div>  Participant :<span className="pyramid-nameUser">{userName}</span></div>
            <ul className="MoneyList">
              {Amont.map((v) => {
                return (
                  <li
                    className={
                      questionNumber == v.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber">{v.id}</span>
                    <span className="moneyListItemAmont">{v.amont}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUserName} />
      )}
    </div>
  );
};

export default App;
