module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  }
};
