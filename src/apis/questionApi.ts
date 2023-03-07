import Axios from 'axios';
import { baseUrl } from '../constants/constants';

interface IQuestionsResponse {
    Question: string;
}

export const questionApi = (id: string): Promise<IQuestionsResponse[]> => {
    return Axios.get(`${baseUrl}/getquestiondetails?QuestionID=${id}`)
        .then(response => response.data);
}