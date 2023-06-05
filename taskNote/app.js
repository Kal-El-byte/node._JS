const yargs = require('yargs');
const notes = require('./taskNote');
const chalk = require('chalk');

//create a add command
yargs.command({
    command: 'add',
    describe: 'allows user to add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //demnad for the title of the note
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

//create a delete command
yargs.command({
    command: 'delete',
    describe: 'allows user to delete note when needed',
    builder: {
        title: {
            describe: 'note title to be deleted',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title);
    }
});

//create a list command
yargs.command({
    command: 'list',
    describe: 'allows non-user to have access the list of notes available',
    handler(argv) {
        notes.listNotes(argv)
    }
})

//create an arrange command
yargs.command({
    command: 'arrange', // aloows user to arrange note in certain order
    describe: 'allows user to view notes without editting ( Read only)',
    handler(argv) {
        notes.arrangeNotes(argv);
    }
})
yargs.parse();