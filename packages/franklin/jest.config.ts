
const jestConfig = {
  watchPathIgnorePatterns: ['<rootDir>/logs/'],
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest',
  },
}

export default jestConfig
