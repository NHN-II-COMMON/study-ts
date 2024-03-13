type test = {
    id: number;
    title: string;
    name: string;
};


// type test2 = test & {
//     name: string;
// }

interface test3 {
    id: number;
    title: string;
    name: string;
}

type test2 = test & {
    name: string;
}

