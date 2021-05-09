# THIS TOOL HAS NOW BEEN DISCONTINUED. NO MORE FURTHER WORKS WILL BE MADE FOR THIS TOOL IN JS VERSION. SELFBOTTING IN D.JS IS NOW RENDERED USELESS AND SO IS THIS TOOL.

# Mass-Purge-DM
A simple tool that mass deletes messages for each friend you have on discord

| Mass Purge DM | 
| ------------- | 
| ![result](https://media3.giphy.com/media/hY1HiIc6ODzgNaN2GK/giphy.gif) |

## Requirements Before Set-up:

1. [Node.JS](https://nodejs.org/en/) installed.
2. Code Editor: VSC(recommended), Sublime, Atom etc.

## Set-up: Script

1. Run the `Launch` file and wait for all the packages to be installed.
1. Right click on the 'settings.json' file.
2. Open the file either on Notepad or a code editor i.e VSC (Visual Studio Code).
3. Fill in ALL the gaps.
4. Save.

### Example: `settings.json`
```
{
  "token": "NzcyOTIxNDY2NzM5MDk3NjIx.X6BtNQ.TIdkZGsGEmfXfJV4gYWXrXjpQp8"
}
```

## Start-up:

1. Run the `run.bat` file.

### Performance:

Limit: 100 Messages per friend

*Tool fetches messages of each friend all at the same time,making huge requests. The higher amounts of friends, the slower the complete execution.*

- 10 friends | Decent Speed
- 10+ friends | Steady speed
- 50+ friends | Progressive and Slow

### Potential Error: To Ignore
```
(node:11348) UnhandledPromiseRejectionWarning: DiscordAPIError: Cannot execute action on a system message
```

# Disclaimer

This is tool was made for educational purposes and proof of concepts. I'm not accountable for any unlawful, unprecedented action and any violation of ToS administered by a third party.
