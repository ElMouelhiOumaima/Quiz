import React, { useEffect, useState } from 'react'

const Quiz = ({name,score,questions,setQuestions,setScore}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect (()=>{
    console.log(questions)
    setOptions(questions && handleShuffle([questions[currQues]? .corre]))
  },[questions]);
  return (
    <div>Quiz Page </div>
  )
}

export default Quiz