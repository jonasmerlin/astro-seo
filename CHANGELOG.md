# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.4.0](https://github.com/jonasmerlin/astro-seo/compare/v0.3.15...v0.4.0) (2021-11-06)

### [0.3.15](https://github.com/jonasmerlin/astro-seo/compare/v0.3.14...v0.3.15) (2021-11-06)


### Features

* upgrade for astro@0.21 ([ed3b2ee](https://github.com/jonasmerlin/astro-seo/commit/ed3b2ee4b8a1aadf4459f8c9ab7c2062eaf7e93d))


### Bug Fixes

* **OpenGraphImageTags:** destructer basic.image prop ([6c6b35d](https://github.com/jonasmerlin/astro-seo/commit/6c6b35d72d91964583db1caf7238394daa7c1046))

### [0.3.14](https://github.com/jonasmerlin/astro-seo/compare/v0.3.13...v0.3.14) (2021-10-30)


### Bug Fixes

* change robots meta tag formatting ([7a35ada](https://github.com/jonasmerlin/astro-seo/commit/7a35adad413a2d5a2cffebb3993d1297b5564af2))

### [0.3.13](https://github.com/jonasmerlin/astro-seo/compare/v0.3.12...v0.3.13) (2021-10-19)

### [0.3.12](https://github.com/jonasmerlin/astro-seo/compare/v0.3.11...v0.3.12) (2021-10-06)


### Bug Fixes

* change description check to title check ([caec994](https://github.com/jonasmerlin/astro-seo/commit/caec9947982f1f0078d1d4e6faac3ff35ce27d2a))

### [0.3.11](https://github.com/jonasmerlin/astro-seo/compare/v0.3.10...v0.3.11) (2021-09-26)


### Features

* add support for OG article tags ([9615bfa](https://github.com/jonasmerlin/astro-seo/commit/9615bfab6402212248260153fbbadfd551b3d756))

### [0.3.10](https://github.com/jonasmerlin/astro-seo/compare/v0.3.9...v0.3.10) (2021-09-04)


### Features

* add support for basic twitter tags ([ab90b55](https://github.com/jonasmerlin/astro-seo/commit/ab90b5593757ea1694e20f2bdf60eff0621b2024))
* log warning when `openGraph.basic.image` ist set, but `openGraph.image.alt` is not ([1fc3df8](https://github.com/jonasmerlin/astro-seo/commit/1fc3df8f885259a5e4f3a266a13c61bdd0803957))

### [0.3.9](https://github.com/jonasmerlin/astro-seo/compare/v0.3.8...v0.3.9) (2021-09-03)


### Features

* add support for Open Graph image tags ([8e61ff6](https://github.com/jonasmerlin/astro-seo/commit/8e61ff67713366951eb1cabf7908a837d7f83278))
* implemen og:image:secure_url tag ([205eb69](https://github.com/jonasmerlin/astro-seo/commit/205eb6971cc23784c84f5571a2f7bc4dd90f82a9))
* log warning when `description` and `openGraph.optional.description` are set to same value ([91e2fba](https://github.com/jonasmerlin/astro-seo/commit/91e2fba66ec9b8c27bc303b123780358c1c3ff58))
* set `og:image:url` content to openGraph.basic.image ([4ff103c](https://github.com/jonasmerlin/astro-seo/commit/4ff103c86ea41f4a993cececd596048e96530f89))


### Bug Fixes

* reference typo to canonical variable ([3493392](https://github.com/jonasmerlin/astro-seo/commit/349339267120600372c80381463707516212726b))

### [0.3.8](https://github.com/jonasmerlin/astro-seo/compare/v0.3.7...v0.3.8) (2021-09-01)


### Bug Fixes

* typos ([e182fcb](https://github.com/jonasmerlin/astro-seo/commit/e182fcb8b7b5f15bb2c5a839d95b8d0d57db444c))

### [0.3.7](https://github.com/jonasmerlin/astro-seo/compare/v0.3.6...v0.3.7) (2021-08-29)


### Bug Fixes

* make desrciption tag work correctly ([d19cedf](https://github.com/jonasmerlin/astro-seo/commit/d19cedf106f931b27756a2bd0f8f85f0e8450cd8))

### [0.3.6](https://github.com/jonasmerlin/astro-seo/compare/v0.3.5...v0.3.6) (2021-08-29)


### Bug Fixes

* don't use closing slashes for meta tags ([4e39973](https://github.com/jonasmerlin/astro-seo/commit/4e39973639a735dbc48345d4e9de22130c3d1f49))
* use <Fragment> instead of <> ([f7fef3b](https://github.com/jonasmerlin/astro-seo/commit/f7fef3b57a86874dc97d20cb69a568bad2a7b4dd))

### [0.3.5](https://github.com/jonasmerlin/astro-seo/compare/v0.3.4...v0.3.5) (2021-08-29)


### Bug Fixes

* use of wrong object for localAlternate ([a588be4](https://github.com/jonasmerlin/astro-seo/commit/a588be4abf9cb5b6a0490be570ca63c82353a1cd))

### [0.3.4](https://github.com/jonasmerlin/astro-seo/compare/v0.3.3...v0.3.4) (2021-08-29)


### Bug Fixes

* test if basic OG properties are null or undefined ([edbc136](https://github.com/jonasmerlin/astro-seo/commit/edbc1366883f2dac0b88355db27b730b7caef626))

### [0.3.3](https://github.com/jonasmerlin/astro-seo/compare/v0.3.2...v0.3.3) (2021-08-29)


### Bug Fixes

* raise an error when OG prop is passed w/o basics ([ee8ea09](https://github.com/jonasmerlin/astro-seo/commit/ee8ea098dac0a45cacc048f5714b83c589b89342))

### [0.3.2](https://github.com/jonasmerlin/astro-seo/compare/v0.3.1...v0.3.2) (2021-08-29)


### Bug Fixes

* wrap basic OG tags in fragment ([bc8da49](https://github.com/jonasmerlin/astro-seo/commit/bc8da492cca7e768fedba6031c907f3d5b0ebbf4))

## [0.3.1](https://github.com/jonasmerlin/astro-seo/compare/v0.2.1...v0.3.1) (2021-08-29)


### Features

* add OG optional properties ([3581649](https://github.com/jonasmerlin/astro-seo/commit/3581649bdee26e61d8869223ba837f6845a28a1c))
