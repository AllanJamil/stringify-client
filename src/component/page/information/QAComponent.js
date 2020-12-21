import React from 'react';
import './InformationPage.css';

const QaComponent = ({question, answer}) => {
    return (
        <div className="question-wrapper">
            <h2>Question: <span>{question}</span></h2>
            <h3>Answer: <span>{answer}</span></h3>
            <hr className="divider"/>
        </div>
    );
};

export default QaComponent;