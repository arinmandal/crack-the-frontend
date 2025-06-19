### Box Model
Fundamentally, the CSS Box Model is a box which encloses each HTML element. It embraces margins, borders, padding, and the content itself. This approach helps us to handle the spacing and sizing of elements performing an essential function in web layout design.

![box-model](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eofyOWN5RYXmLGbiooBM7Q.png)

### Block Level Elements

- `<div>: A generic container for grouping other HTML elements. It's often used for styling or layout purposes.`

- `<p>: Defines a paragraph of text.`

- `<article>: Represents a self-contained composition in a document, page, application, or site.`

- `<section>: Defines a section in a document.`

- `<h1> - <h6>: Used for headings, with <h1> being the highest level and <h6> the lowest.`

- `<header>, <nav>, <footer>: Used for header, navigation, and footer sections of a page, respectively.`

- `<ul>, <ol>, <li>: Used for unordered and ordered lists and list items.`

- `<table>, <tr>, <td>, <th>: Used for creating tables.`

### Inline Elements

- `<span>: A generic inline container for phrasing content.`
- `<a>: Creates hyperlinks to other pages or sections.`
- `<img>: Embeds an image.`
- `<strong>, <em>: Used for emphasizing text (making it bold or italic).`
- `<code>: Represents a short fragment of computer code.`
- `<button>: Defines a clickable button.`
- `<input>: Used to create various form input elements.`
- `<br>: Inserts a single line break.`

#### Key Differences:

| Block                                             | Inline                                                                            |
| ------------------------------------------------- | --------------------------------------------------------------------------------- |
| Render in new line.                               | Render in same-line, but when there is no space available it break into new line. |
| Support width left-right                          | Depands on content width.                                                         |
| Support custom width and height                   | Not suppoerted                                                                    |
| Support margin, padding in  (top, right, bottom, left). | It only support horizontal(left and right) margins and padding on all four sides, but the vertical padding (top and bottom) can affect the layout of surrounding content, while horizontal padding behaves as expected.                                |

<hr/>

<!-- Inline-block -->

#### Inline Block

Inline-block elements in CSS combine the properties of both inline and block elements. They flow within the text like inline elements, but they also respect width, height, and margin properties, like block elements. This allows for flexible and responsive web page layouts.
