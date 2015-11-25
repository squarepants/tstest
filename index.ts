import * as Cyra from 'cyra';

console.log('test');

let appInitObject: Cyra.AppInitObject = {
    root: 'body',
    default: 'index'
}

Cyra.initApp(appInitObject);