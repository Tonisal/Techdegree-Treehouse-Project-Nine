Install
There is no special plugin for JetBrains' IDEs.
Instead, you can use CSScomb as an external tool:

Install CSScomb: npm install csscomb
Go to Preferences > External Tools (or press ⌘, on Mac)
Click on Add icon (or press ⌘N on Mac)
Fill the form with following info:
– Name: CSScomb
– Program: path_to_installed_csscomb/bin/csscomb (see NB for Windows users below)
– Parameters: $FilePath$ -t
– Working directory: $FileDir$
All checkboxes in the form are optional, you can check whichever you want.
CSScomb will be available then in all menus you select.

NB. On Windows you may need to use npm config get prefix to get a directory with csscomb.cmd. So in "Program" field you will need to put something like C:\Users\User\AppData\Roaming\npm\csscomb.cmd.

Configure
You can place .csscomb.json file in the project's directory, or your HOME directory, or anywhere else.
See docs for info.
