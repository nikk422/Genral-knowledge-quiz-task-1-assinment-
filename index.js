var readline=require("readline-sync");
score=0


var userName=readline.question("Enter your Name :")
console.log("hello " , userName, "\n please play this game and improve your knowledge")


function play(question,answer){
  var userAnswer=readline.question(question)
  if (userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("your answer is right")
    console.log("________")
    score=score+1
  }else{
    console.log("your answer is wrong")
    console.log("_______")
  }
};

var AllQuestions=[{
  question:"who is Yuvraj sigh? \n1. Cricketer \n2. Rider \n3. reporter \n4. poilet\n",
  answer:"1"
  },{
    question:"who is prime minister of india? \n1. Narendra Modi \n2. Amit shaah \n3. Sachin tendulakar \n4. Amir khan\n",
    answer:"1"
  },{
    question:"Where is TaajMahal? \n1.Delhi \n2.Indore \n3.Aagra \n4.Mumbai \n",
    answer:"3"
  },{
    question:"Who is Big-B of Bollywood? \n1. Akshay kumar \n2. Shahrukh khan \n3. Amitabh Bachchan \n4. Dharmendra \n",
    answer:"3"
  },{
    question:"Who was first CDS of india? \n1. Rajnath singh \n2. Bipin Rawat \n3. Amit shah \n4. Ajit dobhal \n",
    answer:"2"
  }];

for (var i=0; i<AllQuestions.length;i++){
  var questionlist=AllQuestions[i]
  play(questionlist.question,questionlist.answer)
};


console.log(userName, "Your final score is ", score)
