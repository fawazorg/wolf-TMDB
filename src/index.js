const { Client } = require("wolf.js");
const { CommandSystem } = require("commands.wolf.js");
const { Commands, Translation } = require("./commands");
require("dotenv").config();

// Async Init Function
const init = async () => {
  const bot = new Client();

  // Connection Events
  bot.On.Connected = () => console.log("Connected");
  bot.On.Disconnected = () => console.log("Disconnected");
  bot.On.Reconnected = () => console.log("Reconnected");

  // Authentication Events
  bot.On.LoginSuccess = (user) => console.log(`Login Success: ${user.Id}`);
  bot.On.LoginFailed = () => console.log("Login Failed");

  // Command Setup
  const SetupCommand = new CommandSystem(bot);
  SetupCommand.LoadTranslations(Translation);
  SetupCommand.AddCommands(...Commands);

  // Login
  await bot.Login(process.env.EMAIL, process.env.PASSWORD);
};

init();
