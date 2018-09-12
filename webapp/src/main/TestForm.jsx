import React, { Component } from 'react';
import TestTitle from './TestTitle';
import QuestionContainer from './QuestionContainer';
// import AddQuestion from './AddQuestion';

class TestForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        value: '',
        questionNo: 1,
        answerNo: 1,
        isClicked: true
    }

    // this.handleQuestionNo = questionNo => {
    //     this.setState({
    //         questionNo
    //     });
    // }
    // this.handleAnswerNo = answerNo => {
    //     this.setState({
    //         answerNo
    //     });
    // }
    // this.handleIsClicked = isClicked => {
    //     this.setState({
    //         isClicked
    //     });
    // }
}

    render() {
        return (
            <form id= "test-form">
            <TestTitle/>
                <br/>
                <QuestionContainer
                    questionNo ={this.handleQuestionNo}
                    answerNo = {this.handleAnswerNo}
                    isClicked={this.handleClick} />
            </form>
        );
    }
}
export default TestForm;