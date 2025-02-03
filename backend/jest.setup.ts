import { DataSource } from 'typeorm';
import { Product } from './src/entity/Product';

const testDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [Product],
    synchronize: true,
    logging: false
});

beforeAll(async () => {
    await testDataSource.initialize();
});

afterAll(async () => {
    await testDataSource.destroy();
});

export { testDataSource }; 