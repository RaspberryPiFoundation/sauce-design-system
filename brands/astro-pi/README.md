# Astro Pi

## Fonts

In order to use styles in Astro Pi sites, you must include the `NotesEsa` type face.

The font files are included in Sauce, but for now you must copy them to your application and ensure that the `@font-face` rules are set up appropriately.

Use the following example, with updated `url` values to reference the font files in your application:

```css
@font-face {
  font-family: 'NotesEsa';
  font-style: normal;
  font-weight: 400;
  src: url('assets/fonts/notes_esa.woff2') format('woff2'), url('assets/fonts/notes_esa.woff')
      format('woff');
}

@font-face {
  font-family: 'NotesEsa';
  font-style: normal;
  font-weight: 700;
  src: url('assets/fonts/notes_esa_bold.woff2') format('woff2'), url('assets/fonts/notes_esa_bold.woff')
      format('woff');
}
```
