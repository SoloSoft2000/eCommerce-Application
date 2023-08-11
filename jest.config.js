module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  testMatch: ['**/tests/**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.(jpg|png|svg)$': 'identity-obj-proxy',
    '\\.(woff|woff2|eot|ttf)$': 'identity-obj-proxy',
  },
};
