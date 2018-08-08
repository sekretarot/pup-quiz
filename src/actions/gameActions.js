import * as actionTypes from './actionTypes';

export function receiveQuestion(data) {
    return {type: actionTypes.RECEIVE_QUESTION, newQuestion: data};
}

export function fetchQuestion() {
    return (dispatch) => {
        fetch('https://dog.ceo/api/breeds/image/random/4')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
                    let questionData = {options: []}
                    response.data.message.forEach(function(element){
                        questionData.options.push({"answer": element.split('/')[4], "image": element});
                    });
                    questionData.correctAnswer = questionData.options[Math.floor(Math.random() * 4)]
                    dispatch(receiveQuestion(questionData));
                }else{
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}

export function questionAnswered(questionIndex, answerIndex) {
    return {type: actionTypes.QUESTION_ANSWERED, questionIndex: questionIndex, answerIndex: answerIndex};
}