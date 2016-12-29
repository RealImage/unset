# Unset

A simple method to unset nested attributes from a JSON object.

Sample usage:

```
let unset = require('unset');
let object = {a: { b: [ {x: 1}, {x: [{ e: 2} ]}]}}
let newObject = unset(object, ['/a/b[*]/x'])
```

The second argument **paths** is similar to the paths that
you can give in the [json-path](https://www.npmjs.com/package/json-path)
module