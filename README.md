# Front-end Software Engineer 
## Interview Task


### Prerequisite:
This task requires a basic understanding of React.js. 
Task Details:
Create a react application that displays mathematics questions. One question is displayed at a time, and the user can navigate backwards and forwards. There are three total questions.

### Where to get the Questions? 
Make an API call to the following link to fetch the question details. 
https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=QuestionID 

The above URL takes a Query Parameter called “QuestionID”. The QuestionIDs for the three questions are:


AreaUnderTheCurve_901
BinomialTheorem_901
DifferentialCalculus2_901




### Example:
https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901 

The question needs to be parsed out from this. It is in the “Question” field.  (For the above link, the question is:

[{"ChapterID": "AreaUnderTheCurve", "QuestionID": "AreaUnderTheCurve_901", "UpdateQuestion": 0, "ExpectedTime": 25, "Difficulty": "0", "Source": "n/a ", "PostQuestionNotes": "n/a ", "Tags": "Theory", "Question": "Let \\( F(x) = \\int_{h(x)}^{g(x)}f(t)dt \\) such that function g(x) and h(x) are defined on \\( [a,b] \\) and differentiable at all points \\( x\\in[a,b] \\), then \\( \\frac{d}{dx}F(x) = ? \\)", "QuestionSummary": "", "Step1": "", "Result1": "", "Explanation1": "", "Step1Timer": 60, "Step2": "", "Result2": "", "Explanation2": "", "Step2Timer": 20, "Step3": "", "Result3": "", "Explanation3": "", "Step3Timer": 15, "Step4": "", "Result4": "", "Explanation4": "", "Step4Timer": 15, "Step5": "", "Result5": "", "Explanation5": "", "Step5Timer": 15, "Step6": null, "Result6": null, "Explanation6": null, "Step6Timer": null, "Step7": null, "Result7": null, "Explanation7": null, "Step7Timer": null, "Step8": null, "Result8": null, "Explanation8": null, "Step8Timer": null}]

([a,b] \\) and differentiable at all points \\( x\\in[a,b] \\), then \\( \\frac{d}{dx}F(x)
How to display the question? 
The above question is Mathjax code. We need to use a library called Better React Mathjax to render this. After using the library, this is what the question should look like: 



### Evaluation Rubric 
All questions are rendered as expected (users should see questions, not the mathjax code)
The user can navigate between the questions.
The app is responsive (web, tablet, and mobile view) 
Overall design and usability.
