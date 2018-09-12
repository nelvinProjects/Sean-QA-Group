import React, { Component } from 'react';

class Questions extends Component {
   constructor(props) {
       super(props);
       this.state = {
            isClicked: false
       }
        this.handleClick = this.handleClick.bind(this);
        
   }


handleClick = () => {
    this.setState({isClicked: true})
        ;
}

answerBox = () => { 
               if (this.state.isClicked === true) {
                     this.setState({isClicked: false})
                     return (<input type="text" className="answer" placeholder="Answer..."/>);
                }
                else { 
                }
               }

render () {   
               

    return (   
            <div className = "Answers">
      {this.answerBox}
      <button type={'button'}  id="add-an-answer" onClick = {this.handleClick}> Add an incorrect answer </button>
       </div>
    );
    
}
    }
export default Questions;
// must have at least two answers for at least 1 question.