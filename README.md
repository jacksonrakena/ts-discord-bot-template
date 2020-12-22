# TypeScript Discord Bot Template
A Discord bot template using discord.js, discord.js-commando, and TypeScript. Supports auto-compilation.

### Features
- Automatic compilation and restarting with Nodemon. When edits are saved, Nodemon will automatically recompile your code and restart your bot.
- SQLite database functionality included, with `discord.js-commando`.
- A good start for new TypeScript developers, or those needing a quick boilerplate for a speedy deployment.

### Setup
`ts-discord-bot-template` makes good use of NPM scripts, so make sure you check out the goodies inside `package.json`. Despite this, the only thing
you need to do to get a debug session started is run `npm run debug` in your favourite shell (in the root directory), and Nodemon will start with the proper configuration.
Feel free to change the scripts inside `package.json` should you need to change Nodemon, TSC, or NPM's runtime flags.

1) Click 'Use this template' in the top-right of this repository.
2) Fill out the name of your new repository, and pick the location.
3) Clone the repository to your computer.
4) Make sure TypeScript is installed on your computer. You can do this by running `npm i -g typescript` from your favourite shell.
5) Install the dependencies. You can do this by running `npm i` from your favourite shell.
6) Update the configuration inside `config.json` with your Discord bot details, preferred command prefix, and support server invite. The last one is optional.
7) Start a debug session with `npm run debug`.
8) Edit to your heart's content, and watch Nodemon automatically recompile and restart your app when changes are detected.


### Copyright
Derivative works, including forks, bots, applications, and services, are **not** subject to any license, restrictions, requirements or specifications. A license is not needed, but a credit might be nice ;)  
  
Otherwise, this repository and assets are copyright &copy; 2018-2021 Abyssal under the MIT License.
