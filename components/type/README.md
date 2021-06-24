# Type Components

By default, all type shares the same base styles for:

- `color`
- `font-size`
- `font-weight`
- `line-height`

See the `Styles/Typography` documentation for more details on how Sauce handles responsive `font-size` scaling by default.

The type components that carry opinionated styles currently only consist of headings. If you need to style a heading, please try to use a component as documented on this page.

The following type styles are all largely element-independent. You should use the correct element to satisfy the content hierarchy of your document, and not just to apply styles.

### Working with "new" type styles from a design

If the design you're working on contains several repeated examples of a type style that is not present in Sauce, you should first discuss with the designer if there's already a suitable type component that could be used instead.

This also applies to cases in which type dramatically changes between viewport widths. **A piece of text should resemble a single type component regardless of the width of the browser window**. If that does not appear to be the case in the design, then the designer and the engineer need to discuss this.

If we can avoid adding type components to Sauce, or "new" ad-hoc type styles in our applications, then we should. The fewer individual type components that Sauce contains, the easier it will be to deliver consistent type experiences across all of our properties, and the easier it will be for developers to pick the correct one!

### Customising type styles using Sauce properties

If your application absolutely, definitely, **must** contain a unique example of type, the `Styles/Typography` documentation will guide you in using Sauce’s styles.

---

## Headings

Headings inform the [structural hierarchy](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#implementing_structural_hierarchy) of your document, and should **never** be used as a method of applying styles to text. As such, all headings (`h1`–`h6`) all deliver the same styles unless we specifically apply a heading style.

There are several different kinds of heading on the site. The examples provided with each are intended to indicate the _usage_ of the heading, and not the style it matches. Over time we’ll convert all the headings in the examples to look like the components provided by Sauce, but for now just make sure that you’re using the correct heading style for the kind of heading you’re implementing.

### Signpost Page Hero

Usage: Styles the heading in the hero of page, where that page’s path immediately follows domain root.

Examples:

- https://www.raspberrypi.org/learn
- https://www.raspberrypi.org/teach

In these cases you may need to tweak some of the type styles to better fit the specific arrangements in the hero. This is currently the only situation in which it's okay to add additional styles on top of a Type component.

### Hero

Usage: Styles the heading in the hero of page, where that page’s path **does not** follows domain root.

Examples:

- https://www.raspberrypi.org/software/operating-systems
- https://www.raspberrypi.org/software/raspberry-pi-desktop

You may see examples of this around the site where the text color differs from the example here.

### Primary

Usage: Styles the title of a page that does not have a hero.

Examples:

- Blog Posts: https://www.raspberrypi.org/blog/the-computers-that-made-britain-on-sale-now/

We will eventually use this on "text only" pages such `/safeguarding` and `/accessibility`

### Secondary

Usage: Styles the title of a section within a page.

Examples:

- The "Raspberry Pi OS", "Raspberry Pi Desktop", and "Third-party software" headings on https://www.raspberrypi.org/software/operating-systems
- The "Digital Making at Home" and "Projects" headings on https://www.raspberrypi.org/learn

### Tertiary

Usage: Styles headings within longer blocks of text.

Examples:

- Blog post sub-headings: https://www.raspberrypi.org/blog/the-computers-that-made-britain-on-sale-now
- "Text-only" page sub-headings: https://www.raspberrypi.org/accessibility

### Item

Usage: Styles headings within smaller items on a page

Examples:

- Card headings, such as those found in the courses listing on https://www.raspberrypi.org/courses
- Blog Post headings on https://www.raspberrypi.org
- "Boxed" content, such as the content in the "Pedagogy" section on https://www.raspberrypi.org/teach
