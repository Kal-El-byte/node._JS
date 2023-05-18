const notes = require('./notes')
const yargs = require('yargs');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        // body: body
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a mote',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        // body: {
        //     describe: 'Note body',
        //     demandOption: true,
        //     type: 'string'
        // }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    // builder: {
    //     title: {
    //         describe: 'list note',
    //         demandOption: true,
    //         type: 'string'
    //     }
    // },
    handler(argv) {
        notes.listNotes(argv)
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});


yargs.parse();