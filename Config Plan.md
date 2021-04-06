# Sauce Config Plan

Transpose current tokens to Style Dictionary properties config. The properties will be divided in to "core" and "brand" properties. At build time the brand properties are merged on top of the core to override the default settings.

The properties are processeed by Style Dictionary and output to:

```
tokens/web/scss
tokens/web/css
```

## Lib

```
sauce/prop
scss/lib/token
scss/lib/validation
```

## Mixins

```
scss/mixin
scss/mixin/border
scss/mixin/border/color
scss/mixin/border/radius
scss/mixin/border/style
scss/mixin/border/width
scss/mixin/clear
scss/mixin/color
scss/mixin/device
scss/mixin/device/category
scss/mixin/device/dimension
scss/mixin/device/display-mode
scss/mixin/device/hover
scss/mixin/device/orientation
scss/mixin/device/pointer
scss/mixin/device/preference
scss/mixin/device/resolution
scss/mixin/flex
scss/mixin/float
scss/mixin/font
scss/mixin/font/family
scss/mixin/font/size
scss/mixin/font/weight
scss/mixin/gap
scss/mixin/grid
scss/mixin/list
scss/mixin/margin
scss/mixin/media
scss/mixin/order
scss/mixin/padding
scss/mixin/position
scss/mixin/size
scss/mixin/size/height
scss/mixin/size/width
scss/mixin/text-align
```

## Primitives

```
scss/primitive
scss/primitive/decorator
scss/primitive/icon
scss/primitive/layout
scss/primitive/style/button
scss/primitive/style/heading
scss/primitive/style/layout
scss/primitive/style/link
scss/primitive/style/type
scss/primitive/utility
scss/primitive/utility/cover
scss/primitive/utility/focus
scss/primitive/utility/inverted
scss/primitive/utility/visually-hidden
```

## Document

```
scss/document
scss/document/reset
scss/document/root
scss/document/styles
scss/document/styles/buttons
scss/document/styles/code
scss/document/styles/forms
scss/document/styles/forms/button
scss/document/styles/forms/fieldset
scss/document/styles/forms/input
scss/document/styles/forms/select
scss/document/styles/headings
scss/document/styles/links
scss/document/styles/lists
scss/document/styles/media
scss/document/styles/media/image
scss/document/styles/media/video
scss/document/styles/tables
scss/document/styles/text-semantics
```

## UI
```
scss/component
scss/decorator
scss/icon
scss/layout
scss/utility
```
