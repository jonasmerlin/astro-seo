![Astro SEO Logo](https://user-images.githubusercontent.com/5182256/131216610-87062ed3-1e42-4ce2-a6a7-7dff5705a885.png)

# 🚀 Astro SEO

This [Astro](https://astro.build/) component makes it easy to add tags that are
relevant for seach engine optimization (SEO) to your pages.

Currently it's __very__ early in development. The ultimate goal is to make this
the one-stop shop for most of your SEO needs when developing Astro sites.

Pull requests and/or feature requests are very welcome!

## How To Use

In any of your Astro pages, import Astro SEO and then use the component inside
the `<head>` section of your HTML:

```jsx
---
import { SEO } from 'astro-seo'
---

<html lang="en">
	<head>
		<SEO 
			title="A Very Descriptive Title"
			description="A heavily optimized description full of well-researched keywords."
		/>
	</head>
	// ... rest of <head>

	<body>
		// ... body
	</body>
</html>
```

## Supported Props

Propname | Type | Description
------------ | ------------- | -------------
title | string | The title of the page.
description | string | Text that gives a concise description of what your page is about.

## Acknowledgements

Astro SEO is _heavily_ inspired by [Next SEO](https://github.com/garmeeh/next-seo)
and all the amazing work Gary is doing developing it. Thanks Gary! ❤️