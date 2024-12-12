# Tailwind CSS: Unexpected Vertical Alignment Bug
This repository demonstrates a common issue encountered when using Tailwind CSS's flexbox utilities, specifically the `items-center` class.  The bug arises from unexpected vertical alignment in a flex container when combining elements with varying heights, like a button and a text paragraph.

The `bug.js` file showcases the problem, while `bugSolution.js` provides a solution.

## Bug Description
When using `items-center` in a flex container, elements are vertically centered.  However, this can lead to a less-than-ideal visual layout when one element (like a button) has inherent height due to padding or other styles, causing text to be positioned in an awkward location.

## Solution
The solution involves more precise control over vertical alignment to achieve the desired layout.
