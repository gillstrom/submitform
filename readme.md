# submitform

> Submit form data from an object easily


## Install

```
$ npm install --save submitform
```


## Usage

```js
const submitform = require('submitform');
const options = {
	action: 'http://example.com',
	id: 'Example',
	method: 'POST'
};

submitform({foo: 'bar'}, options);
```


## API

### submitform(data, options)

#### data

*Required*  
Type: `object`

Data to be sent.

#### options

*Required*  
Type: `object`

Attributes to be set [on the form element.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
