---
title: Typography
---

## Font Size

Sauce’s font sizes are based on a [modular typographic scale](https://www.modularscale.com/?16&px&1.2), calculated against a ratio of `1.2`. They are defined as CSS custom properties on the document’s `:root` element, and are available across your entire application without importing any Sass mixins.

> If you’re looking for `skateboard`, `scooter`, `car` etc, they've gone. Sorry! We were incorrectly using them as if they represented _Type Components_ instead of just _font-sizes_. They weren't doing the job correctly because a Type Component should also contain styles for the `color`, `font-weight`, `line-height`, `margin`, etc. A new collection of Type Components (powered by these `font-size` values) have been created as a replacement.

| Property               | Relative Size | `1em == 16px` |
| ---------------------- | ------------- | ------------- |
| `--font-size-u-1`      | `1.2rem`      | `19.20px`     |
| `--font-size-u-2`      | `1.44rem`     | `23.04px`     |
| `--font-size-u-3`      | `1.728rem`    | `27.65px`     |
| `--font-size-u-4`      | `2.074rem`    | `33.18px`     |
| `--font-size-u-5`      | `2.488rem`    | `39.81px`     |
| `--font-size-u-6`      | `2.986rem`    | `47.78px`     |
| `--font-size-u-7`      | `3.583rem`    | `57.33px`     |
| `--font-size-u-8`      | `4.3rem`      | `68.80px`     |
| **`--font-size-base`** | **`1rem`**    | **`16.00px`** |
| `--font-size-d-1`      | `0.833rem`    | `13.33px`     |
| `--font-size-d-2`      | `0.694rem`    | `11.11px`     |
| `--font-size-d-3`      | `0.579rem`    | `9.26px`      |

The "base size" is equal to `1rem` (as defined on the `html` element). Starting from this base size, each step _up_ the scale is equal to `[current step] * 1.2`, and each step _down_ is `[current step] / 1.2`. For example, where `base = 1`:

```
up_2   = up_1   * 1.2
up_1   = base   * 1.2
base   = 1
down_1 = base   / 1.2
down_2 = down_1 / 1.2
```

This allows for a more flexible type system, and leads us away from worrying about exact pixels sizes, instead picking the size that is most appropriate to match the design based on the hierarchy of the content.

## Responsive font-size scaling

We can avoid typographic inconsistency by removing the need to apply `@media` queries to individual pieces of type, and instead rely on a responsive font-size mechanism to take care of the rest.

The value of the "base size" for fonts as defined on `body` will always equal `1rem`, but the value of `1rem` needs to change based on the size of the viewport. Using [CSS’s `clamp` function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) and the `vmin` size unit, we can achieve just that. The `html` element’s `font-size` is calculated as follows:

```css
html {
  font-size: clamp(1em, 3vmin, 1.25em);
}
```

A clamp, consists of three values: `min`, `ideal`, and `max`. It will always try to output the size defined as the `ideal`, unless it exceeds the limits defined by the `min` or `max`, at which point it will return the relevant value.

The `vmin` unit represents the smaller of the two viewport axes. In a portrait viewport this will be the `x` axis, and — in portrait — the `y`. Therefore, the `clamp` will attempt to size the `html` element’s `font-size` to 3% of whichever axis is smaller.

The `1em` and `1.25em` values represent the _minimum_ and _maximum_ values that the clamp will output, so in the case that `3vmin` is equal to greater than `1.25em`, the clamp will return `1.25em`.

Taking this approach means that for the first time we have effortlessly scalable font sizing on the viewport’s width _and_ height, instead of just applying `min-width` media queries to handle resized text. This is particularly useful on phones and smaller laptops in landscape orientation.

A user who has zoomed their browser (or provided their own default browser stylesheet) will still see our font-sizes calculated as relative values for their preferences, which helps us continue to deliver accessible type by default.

## Font Families

Include this in your application `<head>`.

```html
<link href="https://fonts.gstatic.com" crossorigin="true" rel="preconnect" />
<link
  as="style"
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&amp;family=Roboto+Slab:wght@400;700&amp;family=Space+Mono&amp;display=swap"
  rel="preload"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&amp;family=Roboto+Slab:wght@400;700&amp;family=Space+Mono&amp;display=swap"
  media="print"
  onload='this.media="all"'
  rel="stylesheet"
/>
<noscript>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&amp;family=Roboto+Slab:wght@400;700&amp;family=Space+Mono&amp;display=swap"
    rel="stylesheet"
  />
</noscript>
```

This HTML fragment makes use of [Resource Hints](https://www.w3.org/TR/resource-hints/) to enable faster downloading of the typefaces we use. It looks counter-intuitive to include more HTML to achieve this aim, but it helps the browser correctly prioritise and handle the request.

For a deep-dive explanation of what’s happening in this HTML snippet, read Harry Roberts’ article "[The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)".

## Font Family

Defined as custom properties on `:root`, and accessible across the whole application. Document default highlighted in <b>bold</b>.

| Property                       | Value                         |
| ------------------------------ | ----------------------------- |
| `--font-family-heading`        | `"'Roboto', sans-serif;"`     |
| `--font-family-monospace`      | `"'Space Mono', monospace;"`  |
| **`--font-family-sans-serif`** | **`"'Roboto', sans-serif;"`** |
| `--font-family-serif`          | `"'Roboto', serif;"`          |

## Font Weight

Defined as custom properties on `:root`, and accessible across the whole application. Document default highlighted in <b>bold</b>.

| Property                    | Value     |
| --------------------------- | --------- |
| `--font-weight-light`       | `300`     |
| **`--font-weight-regular`** | **`400`** |
| `--font-weight-medium`      | `500`     |
| `--font-weight-bold`        | `700`     |

## Line Height

Defined as custom properties on `:root`, and accessible across the whole application. Document default highlighted in <b>bold</b>.

| Property                    | Value     |
| --------------------------- | --------- |
| `--line-height-reset`       | `1`       |
| `--line-height-tight`       | `1.1`     |
| `--line-height-cosy`        | `1.2`     |
| **`--line-height-regular`** | **`1.4`** |
| `--line-height-loose`       | `1.6`     |
