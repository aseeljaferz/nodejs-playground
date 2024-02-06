const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  
  //const duplicateNotes = notes.filter((note) => note.title === title);  //"filter" - checkes the entire array even after finding duplicate
  
  const duplicateNote = notes.find((note) => note.title === title)        //"find" - once duplicate fount it stops searching the array

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen.bold("New note added!"));
  } else {
    console.log(chalk.bgRed.bold("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const noteToKeep = notes.filter((note) => note.title !== title);    //shorthand arrow function

  if (notes.length > noteToKeep.length) {
    console.log(chalk.bgGreen.bold("Note removed!"));
  } else {
    console.log(chalk.bgRed.bold("No note found!"));
  }

  saveNotes(noteToKeep);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse.bold('Your notes'));

  notes.forEach((note) => {
    console.log(note.title);
  })
}

const readNotes = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse.bold(note.title));
    console.log(note.body);
  }else{
    console.log(chalk.bgRed.bold('Note not found!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// module.exports = getNotes;

//to export more than one thing
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
