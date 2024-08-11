#!/usr/bin/env node

function logDetails() {
    const asciiArt = `
    ██████╗ ██████╗  █████╗ ███╗   ██╗ █████╗ ██╗    ██╗██╗    ██╗██╗    ██╗
    ██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║    ██║██║    ██║██║    ██║
    ██████╔╝██████╔╝███████║██╔██╗ ██║███████║██║ █╗ ██║██║ █╗ ██║██║ █╗ ██║
    ██╔═══╝ ██╔══██╗██╔══██║██║╚██╗██║██╔══██║██║███╗██║██║███╗██║██║███╗██║
    ██║     ██║  ██║██║  ██║██║ ╚████║██║  ██║╚███╔███╔╝╚███╔███╔╝╚███╔███╔╝
    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚══╝╚══╝  ╚══╝╚══╝  ╚══╝╚══╝
    `;

    const details = `
    \x1b[1m\x1b[36mName:\x1b[0m Pranawww
    \x1b[1m\x1b[33mAbout:\x1b[0m A Professional chatgpt prompter
    \x1b[1m\x1b[33mWebsite:\x1b[0m https://pranaw.vercel.app
    \x1b[1m\x1b[35mGitHub:\x1b[0m https://github.com/Pranav322
    \x1b[1m\x1b[31mTwitter:\x1b[0m https://twitter.com/_pranav69
    \x1b[1m\x1b[36mEmail:\x1b[0m duckieduckk@duck.com

    \x1b[1m\x1b[33mLanguages:\x1b[0m
    \x1b[33mJavaScript\x1b[0m \x1b[34mPython\x1b[0m \x1b[32mDart\x1b[0m \x1b[34mGo\x1b[0m \x1b[31mJava\x1b[0m

    \x1b[1m\x1b[33mFrameworks:\x1b[0m
    \x1b[31mNextJs\x1b[0m \x1b[34mExpressJs\x1b[0m \x1b[32mTailwindCss\x1b[0m \x1b[34mDjango\x1b[0m \x1b[31mReact\x1b[0m \x1b[90mMaterial UI\x1b[0m

    \x1b[1m\x1b[33mOthers:\x1b[0m
    \x1b[36mDocker\x1b[0m \x1b[32mMongodb\x1b[0m \x1b[90mPostgreSQL\x1b[0m \x1b[31mGit\x1b[0m \x1b[36mLinux\x1b[0m
    `;

    // Create a colorful box using ANSI escape codes
    const colorfulBox = `
    \x1b[38;5;51m+-----------------------------------------------------------------+
    ${asciiArt}
    +-----------------------------------------------------------------+
    ${details.split('\n').map(line => '    |' + line).join('\n')}
    +-----------------------------------------------------------------+\x1b[0m`;

    // Log the colorful box with ASCII art and details in the terminal
    console.log(colorfulBox);
}

// Call the function to log your details
logDetails();
