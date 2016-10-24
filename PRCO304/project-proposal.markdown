# PRCO304 - Project Proposal
> Date: 16-10-16

# Project Proposal

### 2 or 3 key word phrases which encapsulate the nature of your project

- Web application development
- Real time collaborative music sequencer/composer

### The intended client

Anyone two people in remote locations or at different computers with an interest in creating a musical composition together in real time.
Client's age limit is unrestricted, only have to be able to use a computer and access to the internet.
No prior skill at music needed, the UI should intuitive that it takes common knowledge and trail and error to be able to start creating music within minutes.

### The main product (final deliverable) to be produced

Final product to be delivered will be a web application that has a step based sequencer with pre-loaded samples in which two users can simultaneously click to create a musical composition.
A user initialises a web instance of the sequencer, shares the session by sending a sharable URL to the other client that they desire to collaborate with. They will both be presented with the same screen in which they can start the process of creating a song or pattern together.
My initial UI idea will take the form of regular step sequencers of most popular DAWs such as Ableton, Fruity loops or others similar to that found on drum machines such as the TR-808. This is, that time signature is split into 16 equal "steps" and each one is equivalent to one note with in the bar. By turning these steps on and off, the users can build up patterns of beats to create songs.
The core product will take shape of a number of these 16 steps one above another, each representing one instrument of a drum kit. The user's at each of their own computers can work together in real time to create patterns. The main focus is to have a real-time collaborative platform, the quality in which a song can be produced out of it comes second. Most of the additional features in which the user's can really manipulate their pattern and song will come under desirables.

Desirables:

- MIDI recording section, in which the user's can record external instruments to layer over the top of the song created
- A "piano roll" with were they can, in a similar fashion to the drum sequencer, step in notes of a piano to create melodies.
- Drum samples and piano roll will have parameters which will enable sound manipulation of the samples, such as: attack, delay, sustain, release and tone.
- A bank of samples to choose from, so that the it is not fixed to the pre-loaded drum and piano samples.
- Multiple banks so that they can piece together songs of a greater length than 16 bars.
- The options to save and download their songs.
- A live chat feature in which the two clients can communicate with each other in order to aid the creation process.

### Initial brief description of the final deliverable (e.g. web-based system providing the client to do this, that and whatnot)

A web-based system providing multiple clients to access the same instance of a musical sequencer simultaneously in order to allow for real-time music collaboration.

### Method of approach

Software development process:

- AGILE
- SCRUM
- With bi-weekly sprints

This is because the process is known to me, it allows me to set bi-weekly goals and produce many repetitions of my work in order to refine the process
It also allows me to get a MVP out as quickly as possibly to maximise marks, instead of building all towards a final goal in which it could fail just as easy as it could succeed.

Development platform:

- JavaScript with NodeJS framework which allows server side programming
- HTML to create the front end in which the users interact with
- A web-server
- MySql back end to allow for saving of the samples, saving of patterns and any other database operations

### Requirements for hardware, software (Please not anything that is not currently available and for which you would 

- A web-server
- Database server

### Also to consider:

**What learning you will have to undertake to carry out the project:**

- Programming to create a musical output
- NodeJS
    - Asynchronous programming
- Online real time operations and all the challenges and constraints it comes with




### Risk factors: What could go wrong and how likely is it?

The hardest part of this will no doubt be creating the real-time operational engine that allows the users to collaborate together simultaneously. However, I don't believe that it is unachievable, there is a wealth of online material that will help me as well as my own intuition.
I have confidence that the product apart from that element is achievable in the time frame given. I will keep this part of the product minimal and fully functional until the real-time feature is fully functional, only after that is working will I start to implement the rest of the features and desirables.
