#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
    const message = "Hey! I'm Pranav, A professional chatgpt prompter.";
    const message2 = "Lets Connect and Build Now !!";
    const twitterLink = "https://twitter.com/_pranav69";
    const linkedinLink = "https://www.linkedin.com/in/pranawww/";
    const instagramLink = "https://www.instagram.com/_pranawww/";
    const githubLink = "https://www.github.com/Pranav322";
  
    // Create a colorful box using ANSI escape codes
    const colorfulBox = `    \x1b[38;5;51m+-----------------------------------------------------------------+
    |   \x1b[38;5;105m${message}      \x1b[38;5;51m|
    |   \x1b[38;5;105m${message2}                                 \x1b[38;5;51m|
    +-----------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                      \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}  \x1b[38;5;51m|
    | \x1b[38;5;93mInstagram:\x1b[0m \x1b[38;5;39m${instagramLink} 
    | \x1b[38;5;93mInstagram:\x1b[0m \x1b[38;5;39m${githubLink} 
                        \x1b[38;5;51m|
    +-----------------------------------------------------------------+\x1b[0m`;
  
    // Log the colorful box in the terminal
    console.log(colorfulBox);
  }
  // Call the function to log your details
logDetails();