'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 
const result = excelToJson({
    sourceFile: './public/SongLyrics.xlsx',
    header:{
        rows: 1 
    },
    columnToKey: {
        'A': 'lyric',
        'B': 'time'
    }
});

fs.writeFile ("./public/songs.json", JSON.stringify(result, null, 2), function(err) {
    if (err) throw err;
    console.log('Excel to JSON parsing complete');
    }
);
