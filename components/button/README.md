# Button

The button styles are applied to the following CSS selectors:

- `.button`
- `button:not([class])`
- `input[type='button']:not([class])`
- `input[type='submit']:not([class])`

If it's button-like, and has no other CSS classes, then this component's styles are applied by default.

In cases where you need a custom button treatment, give your button a `class` attribute, and the Sauce default styles will not be applied.

Should need to specify a `class` attribute on your button, but it _does_ require the Sauce styles (for example, when an anchor needs to take on the appearance of a button), then applying a `class` of "button" will apply the Sauce styles manually.

Additionally, `secondary` and `disabled` variants are available for buttons. A button-like element with a `disabled` attribute will also have the appropriate CSS applied.
