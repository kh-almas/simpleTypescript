{
    // set "target": "ES6" in tsconfig file


    // get json placeholder image

    // const getTodo = () => {
    //     fetch(
    //         'https://jsonplaceholder.typicode.com/todos/1'
    //     )
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    const getTodo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    getTodo();



    //simulate

    const createPromise = () :Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data :string = "this is test";
            if(data){
                resolve(data);
            }else{
                reject('failed to load data');
            }
        })
    }

    // call promise
    const showData = async () => {
        const findData :string = await createPromise();
        console.log(findData);
    }

    showData();



}