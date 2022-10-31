import React from "react";
import { useState } from "react";

const Test3 = () => {
  const [quiz, setQuiz] = useState([]);

  const handleFetchQuiz = () => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuiz(data.results);
      });
  };

  return (
    <div>
      {" "}
      Test3: <br />
      <button onClick={handleFetchQuiz}>Fetch Quiz</button>
      <ul>
        {quiz.map((results) => {
          return (
            <li key={results}>
              Category: {results.category} <br />
              Type:{results.type} <br />
              Difficulty: {results.difficulty} <br />
              Question: {results.question} <br />
              Answers: {results.correct_answer} {results.incorrect_answers}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Test3;
