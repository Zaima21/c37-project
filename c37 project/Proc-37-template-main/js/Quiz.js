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
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("pink");
    //write code to show a heading for showing the result of Quiz
    text("Results")
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if (allContestants != undefined){
        fill("blue");
        textSize(20);
        text("NOTE: CONTESTANTS WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN",130,230)
        var position = 230
        for(var plr in allContestants){
          var correctAnswer = "2"
          if(correctAnswer === allContestants[plr].answer)
          fill("green");
          else fill("red")
          position += 30
          text(allContestants[plr].name+":" + allContestants[plr].answer, 130,position)
        }
    }
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
    
  }

}
