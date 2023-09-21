module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  testMatch: ['**/tests/**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.(jpg|png|svg)$': 'identity-obj-proxy',
    '\\.(woff|woff2|eot|ttf)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  transformIgnorePatterns: ['node_modules/(?!swiper|ssr-window|dom7)'],
};
