db.test.createIndex({ myfield: 1 }, { unique: true });
db.test.createIndex({ thatfield: 1 });
db.test.insert({ myfield: 'hello', thatfield: 'testing' });