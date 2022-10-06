const fs = require('fs');
const { parse } = require('path');
const { connected } = require('process');
const config = require("./config.json");

var finalOut = "";

async function main(){
    const filelist = await fs.promises.readdir(config.basepath);
    finalOut = "id,Party 1,Party 2,Court,IntrmdData B64,n(dat),,<dat B64>,\n";
    filelist.forEach((filename) => {
        let nf = parsefile(filename);
        finalOut += `${nf}\n`
    })

    fs.writeFileSync(config.outfile,finalOut);

}


function parsefile(name){


    let output = "";
    let fileContents = fs.readFileSync(config.basepath + name).toString();
    let fileContentsCopy = (' ' + fileContents).slice(1);

    let splitOnNL = fileContents.split("\n");
    let parties = splitOnNL[0].split(" v ");

    let id = getId(name.toString());
    output = `${id},`;
    output += `${btoa(parties[0])},${btoa(parties[1])},`;
    output += `${btoa(splitOnNL[1])},`;

    let lines = fileContents.split(/\n\d+\.\s/);
    output += `${btoa(lines[1])},`;
    output += `${lines.length-1},`;
    for(let i = 1; i < lines.length; i++){
        output += `${btoa(lines[i])},`
    }

    return output;


}

function getId(name){
    name = name.toString();
    let pospref = name.indexOf(config.fileidprefix);
    let possuffix = name.indexOf(config.fileidsuffix);
    return name.slice(pospref+1,possuffix);
}

main()
