![Astro SEO Logo](https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png)

# 🚀 Astro SEO

This [Astro](https://astro.build/) component makes it easy to add tags that are
relevant for seach engine optimization (SEO) to your pages.

The ultimate goal is to make this the one-stop shop for most of your SEO needs when developing Astro sites.

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
canoncial | string | Prevent duplicate content issues by specifying the "canonical" or "preferred" url of a web page.
noindex | boolean | Set this to true if you don't want search engines to index your page. Since this is an SEO component, this gets set to `false` by default. This way, indexing is strictly opt-out.
nofollow | boolean | Set this to true if you don't want search engines to follow links on your page. Since this is an SEO component, this gets set to `false` by default. This way, following links is strictly opt-out.
openGraph.basic.title | string | Set the title Open Graph should use. This can differ from your general page title. If you define this, you must define the other 3 OG basic properties as well: `type`, `image` and `url`. ([Learn more.](https://ogp.me/#metadata))
openGraph.basic.type | string | Set the [type](https://ogp.me/#types) Open Graph should use. If you define this, you must define the other 3 OG basic properties as well: `title`, `image` and `url`. ([Learn more.](https://ogp.me/#metadata))
openGraph.basic.image | string | URL of the image that should be used in social media previews. If you define this, you must define the other 3 OG basic properties as well: `title`, `type` and `url`. ([Learn more.](https://ogp.me/#metadata))
openGraph.basic.url | string | The canonical URL of your object that will be used as its permanent ID in the graph. Mostl likely either the url of the page or its canonical url (see above). If you define this, you must define the other 3 OG basic properties as well: `title`, `type` and `image`. ([Learn more.](https://ogp.me/#metadata))
openGraph.optional.audio | string | A URL to an audio file to accompany this object.
openGraph.optional.description | string | A one to two sentence description of your object.
openGraph.optional.determiner | string | The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank).
openGraph.optional.locale | string | The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
openGraph.optional.localeAlternate | Array<string> | An array of other locales this page is available in.
openGraph.optional.siteName | string | If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
openGraph.optional.video | string | A URL to a video file that complements this object.

## Open Graph

Open Graph properties are passed as one object to the prop `openGraph`. The structure of this object is modeled after the [Open Graph documentation](https://ogp.me/) itself. That means it uses nested objects to differentiate between basic and optional properties, as well as object specific ones. If you pass an openGraph config, you _must_ define all 4 of the basic properties (`title`, `type`, `image` and `url`). The optional properties are all ... well, optional.

```typescript
// TypeScript interface of openGraph prop
openGraph?: {
	basic: {
		title: string;
		type: string;
		image: string;
		url: string;
	},
	optional?: {
		audio?: string;
		description?: string; 
		determiner?: string; 
		locale?: string; 
		localeAlternate?: Array<string>;
		siteName?: string;
		video?: string;
	}
}
```

## Goals

Our first goal for this project is to support the most-used tags that are
relevant for SEO. That includes the most-used open graph tags.

After that comes feature-parity with Next SEO. After _that_ ... we'll see.

## What does this component do, exactly?

There's certainly no magic to what Astro SEO does. Basically, it bundles the
creation of regular SEO-relevant HTML tags inside one component that you can
then use inside your page's `<head>` tag.

The translation between props and tags is pretty direct and almost 1:1. After 
building, there probably won't be anything you wouldn't have written yourself.
The idea is to surface the options that exist in a central place and adhere to 
best practices where it's theoretically possible not to. __If you want to see 
how the sausage gets made, there's only one place you will have to check__: 
`/src/SEO.astro`

If you want, you can view Astro SEO as a checklist, so you don't forget a tag.
Or maybe also as an educational tool, to see which options exist in the first 
place.

## Acknowledgements

Astro SEO is _heavily_ inspired by [Next SEO](https://github.com/garmeeh/next-seo)
and all the amazing work Gary is doing developing it. Thanks Gary! ❤️