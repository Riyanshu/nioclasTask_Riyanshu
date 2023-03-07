import {useEffect, useState} from 'react';
import { questionApi } from '../apis/questionApi';
import { MathJax } from 'better-react-mathjax';

interface IQuestions {
    questionId: string;
}

const Questions = (props: IQuestions): JSX.Element => {
    const { questionId } = props;
    const [question, setQuestion] = useState<string | null>(null);

    const fetchQuestion = async () => {
        try {
            await questionApi(questionId).then(data => setQuestion(data[0].Question))
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchQuestion();
    }, [questionId])

    return (
        <div>
            {question && (
                <MathJax>
                    {question}.
                </MathJax>
            )}
        </div>
    );
}

export default Questions;