// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";

// export default function Trivia({
//   data,
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
// }) {
//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [className, setClassName] = useState("answer");
//   const [letsPlay] = useSound(play);
//   const [correctAnswer] = useSound(correct);
//   const [wrongAnswer] = useSound(wrong);

//   useEffect(() => {
//     letsPlay();
//   }, [letsPlay]);

//   useEffect(() => {
//     setQuestion(data[questionNumber - 1]);
//   }, [data, questionNumber]);

//   const delay = (duration, callback) => {
//     setTimeout(() => {
//       callback();
//     }, duration);
//   };

//   const handleClick = (a) => {
//     setSelectedAnswer(a);
//     setClassName("answer active");
//     delay(3000, () => {
//       setClassName(a.correct ? "answer correct" : "answer wrong");
//     });
//     // setTimeout(() => {
//     //   setClassName(a.correct ? "answer correct" : "answer wrong");
//     // }, 3000);

//     // setTimeout(() => {
//       delay(5000, () => {
//       if (a.correct) {
//         correctAnswer();
//         delay(1000, () => {
//           setQuestionNumber((prev) => prev + 1);
//           setSelectedAnswer(null);
//         });
//         // setTimeout(() => {
//         //   setQuestionNumber((prev) => prev + 1);
//         //   setSelectedAnswer(null);
//         // }, 1000);
//       } else {
//         wrongAnswer();
//         delay(1000, () => {
//           setTimeOut(true);
//         });
//         // setTimeout(() => {
//         //   setTimeOut(true);
//         // }, 1000);
//       }
//     // }, 5000);
//       })
//   };
//   return (
//     <div className="trivia">
//       <div className="question">{question?.question}</div>
//       <div className="answers">
//         {question?.answers.map((a) => (
//           <div
//             className={selectedAnswer === a ? className : "answer"}
//             onClick={() => !selectedAnswer && handleClick(a)}
//           >
//             {a.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

export default function Trivia({
  data,
  setstop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(()=>{
    letsPlay();
  } , [letsPlay]);
 
  useEffect(() => {

    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const dalay = (duration , callback)=>{
          setTimeout(()=>{
            callback()
          },duration)
  }

  const handlClick = (a) => {
    setSelectAnswer(a);
    setClassName("answer active");
    dalay(3000 , ()=>{
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })

    dalay(5000 , ()=>{
      if (a.correct) {
        correctAnswer()
        dalay(1000, ()=>{
          setQuestionNumber((prev)=>{return prev + 1});
          setSelectAnswer(null)

        })
      }else{
        dalay(1000 , ()=>{
          wrongAnswer();
          setstop(true)

        })
      }
    });
  };
        console.log('THIS IS ' + questionNumber)
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectAnswer === a ? className : "answer"}
            onClick={() => {
              handlClick(a);
            }}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
