var panel = $(".sub-wrapper");

// Question set
var questions = [ {
  question: "What was the name of the Krusty Krab before Mr. Krabs bought it?",
  availAnswers: ["Rusty Krab", "Spongy Krab", "Tiger Krab", "Krab Shop"],
  correctAnswer: "Rusty Krab"
}, {
  question: "What is the only episode where Larry the Lobster is referred to as Big Larry?",
  availAnswers: ["Ripped Pants", "Treasure Box", "Spot Goes To School", "Plankton's Good Eye"],
  correctAnswer: "Ripped Pants"
}, {
  question: "Who is SpongeBob Squarepants' best friend?",
  availAnswers: ["Patrick", "Squidward", "Sandy", "Pearl"],
  correctAnswer: "Patrick"
}, {
  question: "What instrument does Squidward like to play?",
  availAnswers: ["Saxophone", "Trumpet", "Oboe", "None Of The Above"],
  correctAnswer: "None Of The Above"
}, {
  question: "Who is the Driver's Ed teacher?",
  availAnswers: ["Mrs. Puff", "Mrs. Colepepper", "Mrs. Puff", "Mrs. Pearl/Krab"],
  correctAnswer: "Mrs. Puff"
}, {
  question: "What is Patrick's last name?",
  availAnswers: ["Fish", "Star", "Tentacles", "Smith"],
  correctAnswer: "Fresh"
}, {
  question: "what is Spongebob's occupation?",
  availAnswers: ["Fry Cook", "Cashier", "Waiter", "He Doesn't Work"],
  correctAnswer: "Fry Cook"
}, {
  question: "What is the squirrel's name?",
  availAnswers: ["Sandra", "Cindy", "Sydney", "Sandy"],
  correctAnswer: "Sandy"
}, {
  question: "Pearl is a .....?",
  availAnswers: ["Dolphin", "Squirrel", "Seal", "Whale"],
  correctAnswer: "Whale"
}, {
  question: "Who are the heroes of Bikini Bottom?",
  availAnswers: ["Mermaid Man and Barnacle Boy", "Spongebob and Patrick", "Squidward and Sandy", "Mermaid Man and Barnacle Girl"],
  correctAnswer: "Mermaid Man and Barnacle Boy"
}, {
  question: "What is the secret formula in the Krabby Patty?",
  availAnswers: ["Love", "A Very Good Sauce", "Something In The Meat", "It Has Never Been Told."],
  correctAnswer: "It Has Never Been Told."
}];



var timer;

var game = {          

  correct: 0,        
  incorrect: 0,       
  counter: 120,                    


  start: function() {                 // this is to start, events
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h1>Spongebob Trivia Game</h1>");

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();             

    for (var i = 0; i < questions.length; i++) {          
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].availAnswers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].availAnswers[j] + "''>" + questions[i].availAnswers[j]);
      }                              
                                      
    }

    panel.append("<button id='done'>Done</button>");    
  },                                                    


  countdown: function() {          
    game.counter--;                 
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();                    
    }
  },

  done: function() {
                // 
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
