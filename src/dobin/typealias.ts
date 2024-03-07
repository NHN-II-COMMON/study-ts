type zz = {
  id: number;
  title: string;
};

type kk = {
  key: number;
  info: zz;
};

type Quiz = {
  a: number;
  b: string;
  c: (a: number, b: string) => { a: number; b: string };
  d: zz;
  e: kk;
};

const test: Quiz = {
  a: 1,
  b: 'dfd',
  c: function (a: number, b: string) {
    return { a: a, b: b };
  },
  d: {
    id: 123,
    title: 'string',
  },
  e: {
    key: 333,
    info: {
      id: 123,
      title: 'string',
    },
  },
};
