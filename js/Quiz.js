class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
   
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
        console.log("quiz")
      }
     
      question = new Question()
      question.display();
    }
  }

  play(){
          


    //write code here to hide question elements
       question.hide()
    //write code to change the background color here
       background("orange")
    //write code to show a heading for showing the result of Quiz
    textSize(30)
    fill("black")   
    text("RESULT : " , 200 , 50)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
     if(allContestants !==undifined){
       debugger;
       textSize(35)
       fill("black")
      text("contestants who answered coreect are highlighted in green" ,50 , 50)
     }
    //write code to add a note here
   for(var i in allContestants){
       debugger;
       var answer = "1"
       if(answer === allContestants[1].answer){
         fill("lime")
         
       }else{
         fill("red")
       }
       text(allContestants[i].name + allContestant[i].answer , 50 , 60 )
   }   
  
   
        
 
     //write code to highlight contest who answered correctly
                       
  } 
 
}
