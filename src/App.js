import './App.css';
import QuestionTab from './QuestionTab';
import { useState } from 'react';


function App() {
  const [ans,setans]=useState(
    {"q0":"","q1":"","q2":"","q3":"","q4":""}
  )
  const correct_ans=["True","Class","Def","eval","set()"]
  
  const setAnsHandle=(event,ind)=>{
    let q_key="q"+ind
    const all_ans = {...ans}
    all_ans[q_key]=event.target.value;
    setans(
      all_ans
    )
  }
  
  const subHandle=()=>{
    let score=0
    for (let i=0;i<correct_ans.length;i++){
      let q_key="q"+i
      if(correct_ans[i]===ans[q_key]){
        score=score+1
      }
    }
    const message="You have scored "+score+" out of "+(correct_ans.length)
    alert(message)
  }
  return (
    <div className="main-div">
      <h1>How well do you know python ?</h1>
      <form  onSubmit={subHandle}>
      <QuestionTab question={"1. What is output of : 33 == 33.0"} options={["False","True","33","Error"]} name={"q1"} setAnswer={(event)=>{setAnsHandle(event,0)}}/>
      <QuestionTab question={"2. Which of these is not a core data type?"} options={["Lists","Dictionary","Tuple","Class"]} name={"q2"} setAnswer={(event)=>{setAnsHandle(event,1)}}/>
      <QuestionTab question={"3. Which keyword is used for function in Python language?"} options={["Function","Def","Fun","Call"]} name={"q3"} setAnswer={(event)=>{setAnsHandle(event,2)}}/>
      <QuestionTab question={"4. Which one of the following is not a keyword in Python language?"} options={["pass","eval","assert","nonlocal"]} name={"q4"} setAnswer={(event)=>{setAnsHandle(event,3)}}/>
      <QuestionTab question={"5. Which of the following statements is used to create an empty set in Python?"} options={["( )","[ ]","{ }","set()"]} name={"q5"} setAnswer={(event)=>{setAnsHandle(event,4)}}/>
      <div className="sub-btn-hold"><input className="sub-btn" type="submit" value="Submit" /></div>
    </form>
    </div>


  );
}

export default App;
