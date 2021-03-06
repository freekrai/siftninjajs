[![NPM](https://nodei.co/npm/siftninja.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/siftninja/)

# SiftNinja.js

## Introduction

[Sift Ninja](https://www.siftninja.com/) is a powerful yet simple software service that automatically moderates and filters content.

This module is a simple module that can be used to call the Sift Ninja API from your node apps, filtering for live chat, social networks, gaming, web comments and more.

## Code Samples

If you haven't created a siftninja.com account yet, you can create one at https://www.siftninja.com

Once created, you can perform checks by calling the API:

```js
var siftninja = require('siftninja')('<your-siftninja-url>','<your-siftninja-apikey');

siftninja('Phase to test').then(function(result) {
	var result = result.body;
	if( result.response ){
		console.log("we are ok");
	}else{
		console.log("We found a problem with this text");
	}
});
```

## Installation

From [npm](https://npmjs.org):

```sh
npm install siftninja
```
---

## Disclaimer

I have no relationship with [Sift Ninja](https://www.siftninja.com), they make a great product that deserves to be put to use anywhere it can be so I made this module for that purpose. For issues related to this module, please [open an issue in the repo](https://github.com/freekrai/siftninjajs/issues), for issues with Sift Ninja's API, please [contact them](https://siftninja.zendesk.com/hc/en-us).
