import * as td from 'testdouble';

function start() {
    const queryUserById = td.replace('./refs').queryUserById;
    td.when(queryUserById(1)).thenReturn({ name: 'Pho' });
    const result = queryUserById(1);
    console.log(result);
}

start();
