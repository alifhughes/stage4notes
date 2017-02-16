## Node Module usage justification

**browersify**:

This module adds NodeJS programming standards to client-side code. That is, it allows for `require()` convention to be used for `npm` modules and local code in the client side. This is very useful as it bundles all the code needed for the client into one file `bundle.js` which saves me from having to include the individual files used and modules needed as script tags in the HTML page. It also allows for greater modularisation of the client-side code, as `require()` can be used for local files as well, it means I can split my local code into modules that can be used interchangeably when needed and composed into greater modules. This means code is clearer and more concise. When using `browersify` it is common to also use its supplementary node module `watchify` which compiles the code into the `bundle.js` when there is a change in the client-side code, meaning you don't have to manually compile it every time there is a change which speeds up local development.

**Tone.js**:

This is a wrapper library for the Web Audio API. It allows for more powerful features to be implemented easier, but most importantly, it allows for precise timing. Due to the single threaded nature of JavaScript, using its in-built `setTimeout()` function does not always mean that the code within will be executed at the time specified. It simply gets put back at the back of the stack and if something is blocking the main thread, then the timing of this will be affected. Instead, `Tone.js` sends the code to be executed at the time specified before it actually needs to be, then when the time it should be executed arrives, it is there to be executed. This ensures accurate and precise timings which is vital to the success of any musical application. It also allows for musical notation to be used when programming timings and sequences instead of the converted time into milliseconds, this helps me in faster development of the sequencer functionality as it is more natural, instead of having to convert back and forth between to ensure correct timing of events.

**Socket.io**:

TBD
