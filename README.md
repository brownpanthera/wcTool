# tit-tool

`tit-tool` is a Unix-like command-line tool that combines file analysis and manipulation capabilities. It provides functionality similar to the `wc` (word count) utility for text analysis, plus file manipulation commands like `touch` and `rm` for creating and removing files and directories.

## Installation

You can install `tit-tool` globally using npm. Make sure you have Node.js and npm installed on your system. Run the following command:

```bash
npm install -g tit-tool


## Usage

Once tit-tool is installed, you can use it from the command line as follows:

### File Analysis Commands

**Counting Bytes**
To count the number of bytes in a file:
```bash
tit -c <file>
```

**Counting Lines**
To count the number of lines in a file:
```bash
tit -l <file>
```

**Counting Words**
To count the number of words in a file:
```bash
tit -w <file>
```

**Counting Characters**
To count the number of characters in a file:
```bash
tit -m <file>
```

**Complete Analysis**
To count words, lines, and bytes in a file:
```bash
tit <file>
```

### File Manipulation Commands

**Touch Command (Create/Update Files)**
Create a new file or update timestamps of existing files:
```bash
tit touch <file>
# or
tit -t <file>
```

**Remove Command (Delete Files and Directories)**
Remove files:
```bash
tit rm <file>
```

Remove multiple files:
```bash
tit rm file1.txt file2.txt file3.txt
```

Remove directories recursively:
```bash
tit rm -r <directory>
```

Force remove (no prompts):
```bash
tit rm -f <file>
```

Combine recursive and force options:
```bash
tit rm -rf <directory>
```

### Help
To view the help message and list of available options:
```bash
tit -help
```

### Version
To check the version:
```bash
tit -version
```

## Examples

```bash
# Analyze a text file
tit document.txt

# Create a new file
tit touch newfile.txt

# Remove a file
tit rm oldfile.txt

# Remove a directory and all its contents
tit rm -rf temp_folder/

# Count words in a file
tit -w document.txt
```


Author: Ali
GitHub repo: https://github.com/brownpanthera/wcTool
Feel free to report issues, or request features on the GitHub repository.