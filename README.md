# Simple Note taking console app built in NodeJS



##### Note: this is a simple project to get use to working with Node.
##### Last update: 24/07/2022.
## Run Locally

Clone the project

```bash
  git clone https://github.com/frxxcko/playing-arround-node-JS
```

Go to the project directory

```bash
  cd playing-arround-node-JS
```

Install dependencies

```bash
  npm install
```

## How it works

#### Add a new note

Add note if it doesn't exist yet, otherwise won't add it to the list of notes.

```
node app.js add --title="Note title" --body="Body description"
```

| Command | Parameters    | Description                |
| :-------- | :------- | :------------------------- |
| `add` | `--title --body` | **Required**. (both parameters) |

#
#### Remove note

Removes the specified note if it can find it, if not, it will not remove any other note.

```
node app.js remove --title="Note title" 
```

| Command | Parameters     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `remove`      | `--title` | **Required**. (title parameter) |

#
#### List all notes

Show list of notes, if there aren't any notes, a message is displayed on how to add new notes.

```
node app.js list 
```

| Command   |
| :-------- | 
| `list`    | 

#

#### Get a specific note

Displays in console a specific note found by it's title.

```
node app.js get --title="Note title" 
```

| Command   | Parameters | Description |
| :-------- | :-------   | :-----      |
| `list`    | `--title`  | **Required**. (title parameter)|



## Lessons Learned

- Differences between Common JS and ES6 Module
- How to require or import and the difference between .cjs (commonJS) and .mjs (ES6 Module) files
- Applied Single responsability principle from SOLID principles in some methods on notes.js
- How to create new commands and access *proccess.argv* values implementing *yargs* from npm 
- Log colored messages on console using *chalk* from npm

## Dev comments

In this project I wanted to mess arround with Node JS, this is just a very simple project.

This is the begin of my journey as I create more and more little projects to later build a fully functional backend. 
But it's a long journey so grab a cup of your favourite beverage and reach out whenever you feel like!
