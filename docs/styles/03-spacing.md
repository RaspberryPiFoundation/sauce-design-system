---
title: Spacing
---

Sauce’s spacing sizes are calculated in `rem` units, which in turn means that they are sized relative to the calculated value of `font-size` on the `html` element. Before reading this document it’s important that you understand how `1rem` is calculated, so make sure you’ve read `Styles / Typography` before continuing here!

---

Now that we understand how `1rem` is calculated, we can now talk about how the spacing values are calculated in turn.

In a previous version of Sauce, we had a set of sizing units named after animals. This system was cool and all, but it has been replaced with `--spacing-[n]` names. Before we get into why this change happened, please note that the new properties are also — for now — aliased to properties that match their old names, which should help ease migration from the old system to the new.

Here are the values:

| Property      | Value      | Alias                 |
| ------------- | ---------- | --------------------- |
| `--spacing-1` | `0.625rem` | `--spacing-ant`       |
| `--spacing-2` | `1.25rem`  | `--spacing-bee`       |
| `--spacing-3` | `1.875rem` | `--spacing-chaffinch` |
| `--spacing-4` | `2.5rem`   | `--spacing-dog`       |
| `--spacing-5` | `3.125rem` | `--spacing-eagle`     |
| `--spacing-6` | `3.75rem`  | `--spacing-flamingo`  |
| `--spacing-7` | `4.375rem` | `--spacing-grizzly`   |
| `--spacing-8` | `5rem`     | `--spacing-hippo`     |
| `--spacing-9` | `5.625rem` | `--spacing-iguanadon` |

The rule of thumb is `spacing number * 0.625`. So for example, `spacing-3` is `3 * 0.625 = 1.875rem`. This multiplier-based system is in place to avoid layouts altering too drastically with the new spacing system applied.

In versions of Sauce prior to `1.0.0`, the document expressed `1rem` as `10px`, which in turn meant that the mobile-first value for `spacing-ant` was equal to `10px`.

Now that our document’s `font-size` has a clamped minimum value of `16px`, we need to multiply the relative value of each spacing unit by `0.625` in order to set the values as proportionally equivalent to the system it replaces.

## Responsive Sizing

Now that we have built responsive `font-size` scaling into the document root, we no longer need to generate several `@media` queries to alter the size of spacing units for different viewport sizes.

`1rem` (set on the `html` element) has a value, and our spacing units will be sized relative to that value. We pick the spacing value that best fits the relationship between the elements on our page, instead of thinking of a particular spacing property as an exact pixel value.

The biggest advantage here is that with mobile-first development, our interfaces will fluidly scale at the same rate as the viewport size grows (on either axis). This also means fewer `@media` queries, and far less unused CSS being sent to the browser. It also helps solve those awkward "inbetween" viewport sizes, because the viewport will automatically scale everything at the same rate.

When an interface starts to look broken, _then_ we can introduce a `@media` query to address that specific layout issue, rather than attempting to deliver a few pre-designed "breakpoints". We can address responsive layout issues in an individual capacity, and in the browser too!

## Property names

First of all, nothing is set in stone. We may decide to ditch the numbered spacing units, and go back to the animal names. The numbered properties have been introduced for the following reasons:

1–9 is easier to memorise than a list of animals. You might be able to remember them, and that’s cool, but it's not so easy to mentally map that name to an estimated value that it represents.

The numbers gives a hint at the relative sizing, based on the understanding that if `1rem` is `16px`, then `spacing-1` is `10px`. And whatever `1rem` is equal to, `spacing-1` will always be relatively sized correctly.

Another advantage is when it comes time to debug a design and quickly try out different values. Updating a single digit is much easier than replacing the name of an animal, which will save time when debugging layout issues, or reacting to feedback from a front-end review.

If the design you need to implement contains something that represents a size between two of the spacing values, it’s important to remember that we need to think responsively, and that the spacing on a Figma document is fixed. We should pick spacing values that best reflect the relationship between the different elements in the design, and avoid trying to replicate a non-responsive pixel size from the design.