const simpleGit = require("simple-git");

const git = simpleGit({
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
});

await git.addRemote("origin", "https://github.com/RenanArantes/myAddons.git");
