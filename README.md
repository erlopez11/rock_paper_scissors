# rock_paper_scissors
This is a rock, paper, scissors game created as a project for The Odin Project.

# Description
This is a project I created as an assignment for The Odin Project's foundations course. It is a rock, paper, scissors game played between the user and the computer. The first to score five points wins the game.

# Design
I created the illustarions used in this game to represent the three different option selections, so that a visual of the selection could be proved alongside the text. The site is made up of a single page containing instructions on how to win the game, the three selection buttons, as well as a score box tallying up points accumulated. Once one of the players reaches a score of five, an overlay appears announcing the winner, the final score, and an option to play again. This game is played against the computer; there is a function within the code that returns a random sleection of three options as the computer's choice.

# Challenges
I was familiar with the type of code I would have to write in order to get the game to work, since I had previously constructed a rock, paper, scissors game for one Codecademy's lesson projects. But at this stage, I only knew how to get the game to play using chrome's developer tool to display the game's quetion, make a typed selection, and present a winner. The game was only made up of one round. The game didn't have any html or css elements, the ability to display the sections made, or keep track of a score until a specific number was reached. While I had been introduced to DOM manipuation and event handlers, I still had difficulties pituring how to get the javascript code to link to html and css elements in order to create visually appealing site that allowed for interaction. I didn't understand how to add an event handler to three seperate buttons, have to score display change based on who was getting the points, or how to display that final end game message.  So, I left the project alone for a while and built smaller games including a tetris game (by follomwing a tutorial) and a scrabble game (Harvard CS50 assignment) where I was able to finally make that connection between linking the javascript, html, and css.

# Further Implementation 
I have noticed that there are some mistakes in the text reponses being displayed, such as the presence of a <br in the score text. There is also inconsistency with the computer selections being made. In most of the times the game has been tested, the player appears win most of the rounds and games because the computer's selection remains the same for multiple rounds instead of changing. This also happens even when the player makes the same selection for multiple rounds. There appears to be something wrong with the function that selects the computers choice at random. There is also a lag that appears when trying to make a selection; if a button is clicked it sometimes doesn't register and nothiing happens almos as is it freezes.

# Demo
[Rock Paper Scissor](https://erlopez11.github.io/rock_paper_scissors/)
