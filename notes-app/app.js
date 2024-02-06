const yargs = require("yargs");
const notes = require("./notes.js");

//------------------------------ process.argv(parsing string using yargs) --------------------------------

//customize yargs version
yargs.version("1.1.0");

//add, remove, read, list(a notes must do this tasks)

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create Listing command
yargs.command({
  command: 'list',
  description: 'List the notes',
  handler() {
    notes.listNotes();
  },
});

//Creating read command
yargs.command({
  command: 'read',
  description: 'Read the note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },  
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

//yargs.parse() goest through the process of parsing the argument like clg.yargs.argv and the result is not displayed twice whis happens if we use clg.(yargs.argv).
yargs.parse();

// console.log(yargs.argv)
