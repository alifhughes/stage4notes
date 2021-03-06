# PRCO304 - Diary
> Date: 30-01-17

### 30-01-17

- Installed node on server
    - sudo ln -s /usr/bin/nodejs /usr/bin/node
- Installed npm on server
    - sudo apt-get install npm
- Creating a user for the server so that not to logon and operate as root user:
    - sudo useradd -m -s /bin/bash alistair
- Added user to a group
    - usermod –a –G wheel alistair
- Made group have sudo privilages, added into visudo:
    - %wheel ALL=(ALL:ALL) ALL
- Add ssh key to authorized keys
    - Copy to clipboard
        - pbcopy < ~/.ssh/id_rsa.pub
    - paste in vim ~/.ssh/authorized\_keys

- created bare bones express application
    - install express-generator -g
    - express RTMC

### 31-01-17

- Worked on deployment script
    - Flightplan npm module
    - created deployment script `flightplan.js`
    - Having trouble with `npm install --production`

### 01-02-17

- Mostly planning and design
    - First iteration screen designs:
        - Need feedback on them
    - A few colour scheme choices:
        - Very limited and has to be consistent throughout
        - Get feedback on them
        - Wanted them to be inviting
- Updated board:
    - Project initiation:
        - Setting up server
        - Deployment
        - Testing
        - bare bones codebase
        - Adding cards to project backlog board
    - Project backlog
        - Some basic ideas
        - Questions in the ideas column
        - Requirements gathering for projects/sprints that are up and coming
        - Requirements gathering for current projects - this week

### 02-02-17

- Added to continuous deployment script
    - Gulp file
    - Mocha tests
    - Deployment script now runs tests before deploying
        - If it fails it won't deploy
    - The gulp file also picks up on changes in file and runs tests on them
- Had meeting with Wennekers
    - Discussion is noted in the notes
- Server adminstration
    - Locked myself out of my server trying to fix the bug of timing out when accessing my app

### 03-02-17

- Fix server bug
    - Reinstalled server and set up user, node and npm again
    - Installed forever globally as root user
    - fly production locally is now running tests before deployment and deploying successfully
- Gave out questionnaire on colour scheme

### 06-02-17

- formulised colour scheme
    - made harmonising greys, with a white to finish the pallete
    - Finished colour justification documentation
- Adding this weeks cards to trello
    - Wish to create a sprint board for upcoming week
    - Estimate points
    - Start it
    - Board created: https://trello.com/b/dclTl2de
- Started on cards:
    - setting up test framework - https://trello.com/c/9b2S4Q0p
    - propose basic UI - https://trello.com/c/5Y7OW4rW
    - basic homepage - https://trello.com/c/qi2DFNVx
- completed cards:
    - setting up test framework - https://trello.com/c/9b2S4Q0p
    - propose basic UI - https://trello.com/c/5Y7OW4rW
    - basic homepage - https://trello.com/c/qi2DFNVx

### 07-02-17

- Want to create simple navigation between pages on app to gain further understanding of routing
- Started cards
    - basic routing - https://trello.com/c/xNxnjErT
- Completed login page with the backend handling the post request properly but isn't hooked up to a database
- Wrote and submit weekly summary

### 08-02-17

- Linked up navigation between pages
- Trying to define for myself the purposes between routes, controllers and middleware
    - Controllers - talk to the database, have the business logic
    - Routes - link the requests from that route to the controller and passes between view
    - middleware - for a layer upon controllers that does common functionality between all controllers
- Create basic sequencer page with no functionality
- Think about requirements for sequencer and start to define user story and potentially start coding

### 12-02-17

- Reasearched project requirements
- found tone.js
- Figured out how to structure app so that Web Audio API is available whilst using node js
- found master thesis similar to mine

### 13-02-17

- further researched the problem of using web-audio api and node
- figured out that have to include the javascript files html header
- controllers are basic logic that handles requests
- need to make a lib folder that contains the actual logic for web audio
- researched and clarified for myself the difference between server side and client side programming
- Set up and started new sprint for up coming two weeks
- Estimated cards
    - Currently at 14.5 points
    - Ambitious but want to see how it goes
- Need to set up app structure
    - MVVM
    - Model to do business logic of the client code
    - Model-view to convert those values to for the view to use

### 14-02-17

- Decided on database
- Wrote up justification for it

### 15-02-17

- Started programming client side application
- Added browersify to bundle all js into one file
    - Allows for node.js style includes in client side programming
    - Helps to make client side js much more modular
- Started programming the sequencer
    - Plays note for duration and note specified
    - start and stop buttons
    - Got a bpm slider that works in adjusting the speed of playback of loop
    - Got the basics of sequencing notes
