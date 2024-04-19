import nReadlines from 'n-readlines';
import {writeFile} from "fs"
const broadbandLines = new nReadlines('assets/dpkg.log');

let line;
let lineNumber = 1;
let bufferString;

while (line = broadbandLines.next()) {
    bufferString += line + "\n"

    if(lineNumber % 500 == 0 && bufferString)
    {
        console.log(`Buffer ${lineNumber} has: ${bufferString}`);
        writeFile("assets/line"+ lineNumber + ".log", bufferString, function (err) {
            if (err) return console.log(err);
            console.log('writing on ' + lineNumber);
          });
        bufferString = ""
    }
    lineNumber++;
}

console.log('end of file.');
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);