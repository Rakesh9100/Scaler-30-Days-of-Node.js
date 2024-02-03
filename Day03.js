// Problem 3: Execute Command

// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.

const { exec } = require('child_process');

function executeCommand(command) {
    // Execute the given command using child_process.exec
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }

        // Print the command output
        console.log(`Command Output:\n${stdout}`);
    });
}

// Test Cases

executeCommand('cd');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
