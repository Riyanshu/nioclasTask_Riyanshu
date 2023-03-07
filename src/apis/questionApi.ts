import Axios from 'axios';
import { baseUrl } from '../constants/constants';

export const questionApi = (questionIds: string[]): Promise<string[]> => {
    const promises = questionIds.map((id) =>
        Axios.get(
          `${baseUrl}/getquestiondetails?QuestionID=${id}`
        ).then((res) => res.data[0]?.Question)
      );
    return Promise.all(promises);
}