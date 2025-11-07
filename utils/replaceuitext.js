const fs = require('fs');
const path = require('path');
const readline = require('readline');
const jsonFile = require('./src/components/Cmd/ko.json');

const mdxFilepath = path.resolve(__dirname, './docs/device/biostation_3/settings.mdx');
let mdxContent = fs.readFileSync(mdxFilepath, 'utf-8');

function getServiceIdByKeyword(keyword) {
  var matchedIDs = [];
  for (let key in jsonFile) {
    if (jsonFile[key] === keyword.trim()) {
        matchedIDs.push(key);
    }
  }
  return matchedIDs;
}

const matches = [...mdxContent.matchAll(/\<Cmd\>(.*?)\<\/Cmd\>/g)];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let index = 0;

function askQuestion() {
  if (index >= matches.length) {
    fs.writeFileSync(mdxFilepath, mdxContent); // 변경된 내용을 mdx 파일에 다시 기록
    rl.close();
  } else {
    const keyword = matches[index][1];
    const serviceIds = getServiceIdByKeyword(keyword);
    if (serviceIds.length === 1) {
      mdxContent = mdxContent.replace(`<Cmd>${keyword}</Cmd>`, `<Cmd sid="${serviceIds[0]}" />`);
      index++;
      askQuestion();
    } else if (serviceIds.length > 1) {
        console.log(serviceIds);
        rl.question(`There are multiple service IDs matching with ***${keyword}***. Please enter the service ID you want to use: `, (serviceId) => {
        if (serviceIds.includes(serviceId)) {
          mdxContent = mdxContent.replace(`<Cmd>${keyword}</Cmd>`, `<Cmd sid="${serviceId}" />`);
        } else {
          console.log("The provided service ID is not found in the matching set. Please try again.");
        }
        rl.question(`Add Upper className? (y/n): `, (answer) => {
          if (answer.toLowerCase() === 'y') {
            mdxContent = mdxContent.replace(`<Cmd sid="${serviceId}" />`, `<Cmd sid="${serviceId}" className="upper" />`);
          }
          index++;
          askQuestion();
        });
      });
    } else {
      index++;
      askQuestion();
    }
  }
}

askQuestion();