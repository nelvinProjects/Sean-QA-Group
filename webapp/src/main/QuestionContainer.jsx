import React from 'react';
import Questions from './Questions';

const QuestionContainer = () => {

        return (
            <div id = "questions">
            <div id = "q1">
            <span className = "question">
          <label> Question 1 </label>
          <input type = "text" className = "enter-question"/>
                </span>
                <br/>
<span className = "answers">
    <label> Please enter the correct answer in here   </label>
    <input type = "text" className = "answer" placeholder = "Answer..."/>
    <br/>
    <label> Please enter your first incorrect answer here </label>
<input type="text" className="answer" placeholder="Answer..."/>
</span>
     </div>
     
     <Questions />
     </div>

        );
    }

export default QuestionContainer;