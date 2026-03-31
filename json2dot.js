const fs = require('fs');
const path = require('path');
const {convert} = require('convert-json-to-dot/convert');

// const object = path.join(__dirname, 'src/components/Cmd/x/x.json');
const object = path.join('C:\\Program Files\\BioStar X\\nginx\\html\\locales\\en\\', 'messages.json');
const output = path.join(__dirname, 'src/components/Cmd/x/en.json');

fs.readFile(object, 'utf-8', (err, data) => {
    if (!err) {
        const jsonObject = JSON.parse(data);
        const result = {};
        convert(jsonObject, result);
        fs.writeFileSync(output, JSON.stringify(result, null, 2), 'utf-8');
        console.log(`변환 완료: ${output}`);
    } else {
        console.log(err);
    }
});