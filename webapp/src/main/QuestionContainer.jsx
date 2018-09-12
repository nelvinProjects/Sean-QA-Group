import React, {Component} from 'react';
import Questions from './Questions';

class QuestionContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = ()=> {
        return (
        <input type="text" className="answer" placeholder="Answer..."/>
        )
    }

    render() {
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
     </div>
            // <div>
            // <div className = "questions">
            //     <Questions/>
            // </div>
            // <div>
            //     <button type={'button'}  id="add-an-answer" onClick = {this.handleClick}> Add an incorrect answer </button>
            // </div>
            // </div>
        );
    }
}
export default QuestionContainer;