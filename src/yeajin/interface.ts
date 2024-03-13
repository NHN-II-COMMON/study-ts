type testType = {
    id: number,
    title : string,
}

const a : testType = {id:1, title:'예진'};


interface testInterface {
    id: number,
    title: string,
}

const b : testInterface = {id : 1, title: '예진'}



type zz = {
    id: number;
    title: string;
}

type Quiz = {
    a: number,
    b: string,
    c: (a: number, b: string) => {a: number, b: string
        
    },
    d: zz,
    e: {
        key: number;
        info: zz
    }

};


const test :Quiz= {
    a: 1, 
    b: "dfd",
    c:function(a: number, b:string){
        return {a,b}
    },
    d: {
        id: 123,
        title: 'string',
    },
    e: {
        key: 333,
        info:{
            id:123,
            title:'string'
        }
    }
}
