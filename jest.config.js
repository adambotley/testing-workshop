module.exports = {
  // Load the rest of everything else in a setup file.
  setupFiles: ['./jest-setup.js'],
  setupFilesAfterEnv: ['./jest-setup-every-test.js'],
  transform: {
    // Load all files with ts-jest for Typescript.
    "^.+\\.[jt]s$": "ts-jest",
  },
  testRegex: "\\.spec\\.[jt]s$",
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  moduleDirectories: ['node_modules', '.'],
}
