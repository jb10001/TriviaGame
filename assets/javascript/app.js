/*   When you click on the Button, it hides and proceeds
to the game, unwraps itself   */

$("#startButton").on('click', function() {
	$("form").css('display', 'block')
	$(".wrapper").css('display', 'none')
})

/*   Begin Game Timer 
----WRITE CODE HERE----
				
					*/

/*   Register Functionality Here 
		---- PSEUDOCODE ----
1. Each time user picks choice, push the value of that choice
to an array. Possible choices are True or False
2. Each True increments a True Counter by 1 (+1)
3. Each False increments a False Counter by 1
4. Each Unanswered Question (user failed to choose a choice) increments
an Unanswered Counter by 1
5. At end of timer, all questions disappear and End Game screen
displays, showing results (including True Counter, False Counter
and Unanswered Counter)
6. Button to restart game appears on End Game Screen

---
Questions:
	If radio button has a value of True,
		how can we convert that to a 1 and add that value to 
	a counter?

	or

	Each time a user a presses a radio button with a value of True,
	then increment the True Counter by 1

	Each time a user presses a radio button with a value of False
	then increment the False Counter by 1

	How do I start a Timer and to begin the timer when user presses
	Start button?

	How do I add functionality so that the timer when it ends,
	makes all the questions go away, then displays End Game Screen?

	How come my background-image isnt appearing(working)?

---
	*/

//	Lets start with the Timer here:
	startTimer = 

We need a TimeUp function.  
Because we want our Timer to run out, so that End Game Screen
is shown.

var seconds_left = 10; // just to test

/*   via stackOverflow


19
down vote
accepted
var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'You are ready';
        clearInterval(interval);
    }
}, 1000);
Here is the Example

shareedit
edited Aug 25 '15 at 6:34
answered Apr 3 '12 at 8:01

safarov
6,67912244
2	 	
Almost.. you have to pass the key to clearInterval method (it won't clear all intervals, if that's what you think). See this test case. – Shadow Wizard Apr 3 '12 at 8:03 

We need a Timer that shows visually it counting down


END... via stackOverflow 
							*/ 






