const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    // call the loadNote function
    const notes = loadNote();

    // loop through the notes.json find existing note, if no note is found, add it
    const notesFilter = notes.filter((note) => {
        return note.title === title;
    });

    if (notesFilter.length === 0) {
        notes.push({
        title: title,
        body: body
        });
        saveNote(notes);
        // console.log(notes)
        console.log(chalk.blue.inverse('Note Added'));
     } else {
        console.log(chalk.red.inverse('Duplicate note found'));
     };
};

// remove note
const removeNote = (title) => {
    const notes = loadNote();

    // loop through existing note and remove duplicate note if found
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });

    if(notes.length > notesToKeep.length){
        saveNote(notesToKeep);
        console.log(chalk.blue.inverse('Duplicate notes removed'));
    } else {
        console.log(chalk.red.inverse('No duplicate note found'));
    };
};

//list notes
const listNotes = () =>  {
    const notes = loadNote();
    console.log('Your notes');
        notes.forEach((note) => {
        console.log(chalk.blue.inverse(note.title))
    });
    // console.log(notes);
};

//read notes
const readNote = (title, body) => {
    const notes = loadNote();
    const duplicateNote = notes.find((note) => {
        return note.title === title;
    });

    if(duplicateNote) {
        // console.log(title);
        console.log('note found');
        // console.log(body);
    }else{
        console.log('note not found');
    };
}
//save note
const saveNote = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

//loadnote
const loadNote = () => {
    try{
        const dataJSON = fs.readFileSync('notes.json');
        const dataBuffer = dataJSON.toString();
        const JSONdata = JSON.parse(dataBuffer);
        return JSONdata;
    } catch (e) {
        []
    };
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};