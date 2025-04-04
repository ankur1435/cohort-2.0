const protobuf = require('protobufjs');

protobuf.load('a.proto')
    .then(root => {
        const Person = root.lookupType('Person');

        const person = { name: "Alice", age: 30 };

        const buffer = Person.encode(person).finish();

        require('fs').writeFileSync('person.bin', buffer);

        console.log('Person serialized and saved to person.bin');

        const data = require('fs').readFileSync('person.bin');

        const deserializePerson = Person.decode(data);

        console.log('Person deserialized from person.bin', deserializePerson);
    })
    .catch(console.error);