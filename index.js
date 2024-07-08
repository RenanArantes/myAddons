import simpleGit from "simple-git";

const git = simpleGit({
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
});

git.add("C:\teste");
