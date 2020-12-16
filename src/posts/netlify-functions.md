---
layout: post
title: Netlify Functions setup
excerpt: New project Netlify Functions setup
date: 2020-12-13
updatedDate: 2020-12-15
tags:
  - post
  - orcas
  - beer
draft: false
---

# Netlify functions

How do you tell netlify where you're functions folder is!?

It must be this!

```json
"build:lambda": "netlify-lambda build src/lambda",
```

and the base endpoint for netlify lambda functions is

```json
www.yoursite.com/.netlify/functions/functionjsfile
```

The function prototype looks like this

```js
// functionjsfile.js
export async function handler(event, context) {
	const something = "some data"
	return {
	  statusCode: 200,
	  // remember to stringify the body
	  body: JSON.stringify({ msg: something })
	}
}
```

The `npm-run-all` package is usful to run multiple dev servers simultaneously


It looks like `ntl dev` looks for `netlify-lambda` to be installed as a dev dependencie in order to start the lambda server


## So to use netlify functions with a project

install `netlify-lambda` and `npm-run-all`
```json
npm i netlify-lambda npm-run-all
```

and add to your `package.json`
```json
"build": "run-p build:**",
"build:lambda": "netlify-lambda build functionsDir",
"build:frontend": "react-scripts build"
```


