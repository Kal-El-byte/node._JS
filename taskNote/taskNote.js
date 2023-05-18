const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

//addnote function
const addNote = function (title, body) {
    const notes = loadNote();

    //avoid adding same note twice
    const duplicateNote = notes.filter(function(note) {
        return note.title === title
    });

    if(duplicateNote.length === 0){
        notes.push({
        title: title,
        body: body
    });
    console.log(chalk.blue('Notes Added succesfully'));
    saveNote(notes);
    } else {
        console.log(chalk.red('Duplicate note found'));
    }
    
};

//delete note function
const deleteNote = function(title) {
    //oad note from Json file
    const notes = loadNote();

    // keep note that is not equals to the title given
    const noteToKeep = notes.filter(function(note) {
        return note.title !== title;
    });

    //if the original notes loaded legth is greater than notes to keep, that means a or two has been deleted
    if(notes.length > noteToKeep.length){ 
        saveNote(noteToKeep);
        console.log(chalk.blue('note deleted'));
    } else {
        console.log(chalk.red('no notes to delete'));
    };
};

//list note function
const listNotes = function() {
    const notes = loadNote();
    notes.forEach(function(note) {
        console.log(note);
    });

    // console.log(notes);
}

//arrange notes
const arrangeNotes = function () {
    const notes = loadNote();

    const sortedNotes = notes.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if(titleA < titleB) {
            return -1
        } if(titleA > titleB) {
            return 1
        } else { return 0}
    });
    console.log(sortedNotes);
};

//saveNote
const saveNote = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync ('taskNote.json', dataJSON);
};

//loadNote 
const loadNote = function () {
    try {
       const dataBuffer = fs.readFileSync('taskNote.json'); //read file imto the programme
       const dataJSON = dataBuffer.toString();
       const JSONdata = JSON.parse(dataJSON);
       return JSONdata;
    } catch (e) {
       return [];
    };
};


module.exports = {
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    arrangeNotes: arrangeNotes
}