import simpleGit from "simple-git";

const git = simpleGit({
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
});

git.add("C:\teste\teste.txt");
git.commit("Initial commit");
git.push("origin", "main");
