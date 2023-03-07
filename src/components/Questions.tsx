import {useEffect, useState} from 'react';
import { questionApi } from '../apis/questionApi';
import { MathJax } from 'better-react-mathjax';
import {questionIds} from '../constants/constants';

interface IQuestions {
    index: number;
}

const Questions = (props: IQuestions): JSX.Element => {
    const { index } = props;
    const [questions, setQuestions] = useState<string[] | null>(null);

    const fetchQuestion = async () => {
        try {
            await questionApi(questionIds).then(data => setQuestions(data))
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchQuestion();
    }, [])

    return (
        <>
            {questions && (
                <>
                    <h2>Question {index+1}</h2>
                    <MathJax>{questions[index]}</MathJax>
                </>

            )}
        </>
    );
}

export default Questions;