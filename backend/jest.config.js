module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: [
        '**/product.controller.test.ts',
        '**/unit/product.dto.test.ts',
        '**/integration/**/*.test.ts'
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    }
};