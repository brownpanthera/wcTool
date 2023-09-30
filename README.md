# ccwc-tool

`ccwc-tool` is a Unix-like command-line tool for counting words, bytes, characters, lines, and combinations of these in text files. It is designed to provide similar functionality to the `wc` (word count) utility commonly found on Unix-like systems.

## Installation

You can install `ccwc-tool` globally using npm. Make sure you have Node.js and npm installed on your system. Run the following command:

```bash
npm install -g ccwc-tool


Usage
Once ccwc-tool is installed, you can use it from the command line as follows:

Counting Bytes
To count the number of bytes in a file, use the -c option followed by the path to the file:

ccwc -c <file>


Counting Lines
To count the number of lines in a file, use the -l option followed by the path to the file:

ccwc -w <file>

Create File
To create file, use the -t option followed by the path to the file:

ccwc -t <file>


Example of how to use ccwc-tool to count words, lines, and bytes in a file:

ccwc <file>


Help
To view the help message and list of available options, use the -help option:

ccwc -help


Author: Ali
GitHub repo: https://github.com/brownpanthera/wcTool
Feel free to report issues, or request features on the GitHub repository.