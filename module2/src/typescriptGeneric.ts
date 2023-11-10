{
    type GenericArray<t> = Array<t>;
    const rollNumbers: GenericArray<number> = [0,1,2];
    const name: GenericArray<string> = ['a', 'b', 'c'];

    const user :GenericArray<{name :string; age :number}> = [
        {
            name: 'a',
            age: 2
        },
        {
            name: 'b',
            age: 6
        }
    ]

    interface User {
        name :string;
        age :number
    }

    const user2 :GenericArray<User> = [
        {
            name: 'a',
            age: 2
        },
        {
            name: 'b',
            age: 6
        }
    ]
}