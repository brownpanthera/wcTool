const packageJson = require("../package.json");

function showHelp() {
  console.log(`Usage: tit [options] <file>

      File analysis options:
        -c, --bytes    Print the byte counts
        -l, --lines    Print the newline counts
        -w, --words    Print the word counts
        -m, --chars    Print the character counts

      File manipulation commands:
        touch          Create file or update timestamps
                       Usage: tit touch <file(s)>
        
        rm             Remove files and directories
                       Usage: tit rm [options] <file(s)>
                       Options:
                         -r, -R, --recursive  Remove directories recursively
                         -f, --force          Force removal without prompts
                         -rf, -fr             Combine recursive and force

      Examples:
        tit -c file.txt           Count bytes in file.txt
        tit touch newfile.txt     Create or update newfile.txt
        tit rm file.txt           Remove file.txt
        tit rm -r folder/         Remove folder and its contents
        tit rm -rf temp/          Force remove temp folder

      Other options:
        -version       Show version information
        -help          Show this help message
      `);
}

function showVersion() {
  console.log(`tit version:\n ${packageJson.version}`);
}

module.exports = {
  showHelp,
  showVersion
};