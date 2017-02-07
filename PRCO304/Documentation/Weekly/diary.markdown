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
