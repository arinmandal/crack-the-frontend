# 🌐 HTML Complete Reference Guide

This README contains **everything you need to know about HTML**, from basic tags to semantic elements, forms, media, and more. Use it as a cheat sheet or a learning document.

---

## 📖 Table of Contents

1. [📌 Basics](#-basics)
2. [📁 HTML Document Structure](https://www.w3schools.com/html/html_intro.asp)
3. [📝 Text Formatting Tags](#-text-formatting-tags)
4. [🔗 Anchor Tags](#-anchor-tags)
5. [🖼️ Image Tag](#-image-tag)
6. [📏 Layout Tags](#-layout-tags)
7. [🧠 Semantic Tags](#-semantic-tags)
8. [📋 List Tags](#-list-tags)
9. [📊 Table Tags](#-table-tags)
10. [🎥 Media Tags](#-media-tags)
11. [📦 Form Elements](#-form-elements)
12. [📌 Miscellaneous Tags](#-miscellaneous-tags)

---

## 📌 Basics

### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Paragraph

```html
<p>This is a paragraph.</p>
```

### Line Break

```html
Line one.<br />Line two.
```

---

## 📁 HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Your content here -->
  </body>
</html>
```

---

## 📝 Text Formatting Tags

```html
<b>Bold</b>
<strong>Strong</strong>
<i>Italic</i>
<em>Emphasized</em>
<u>Underline</u>
<mark>Highlighted</mark>
<small>Small</small>
<big>Big</big>
<sub>Subscript</sub>
<sup>Superscript</sup>
<del>Deleted</del>
<ins>Inserted</ins>
<pre>
  Preformatted
  Text block
</pre>
```

---

## 🔗 Anchor Tags

```html
<a href="https://google.com">Visit Google</a>
<a href="https://example.com" target="_blank">Open in new tab</a>
```

---

## 🖼️ Image Tag

```html
<img src="image.jpg" alt="Description" width="300" height="200" />
```

---

## 📏 Layout Tags

```html
<div>This is a division block</div>
<span>This is inline</span>
<hr />
<!-- Horizontal line -->
```

---

## 🧠 Semantic Tags

```html
<header>Header section</header>
<nav>Navigation menu</nav>
<main>Main content</main>
<article>Article content</article>
<section>Section of page</section>
<aside>Sidebar info</aside>
<footer>Footer section</footer>
```

---

## 📋 List Tags

### Unordered List

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Ordered List

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

### Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
</dl>
```

---

## 📊 Table Tags

```html
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

---

## 🎥 Media Tags

### Video

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Audio

```html
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

---

## 📦 Form Elements

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">Submit</button>
</form>
```

### Other Input Types

```html
<input type="checkbox" /> Checkbox <input type="radio" /> Radio
<input type="password" /> Password <input type="file" /> File Upload
<input type="date" /> Date <input type="number" /> Number
```

---

## 📌 Miscellaneous Tags

### Iframe

```html
<iframe src="https://example.com" width="300" height="200"></iframe>
```

### Button

```html
<button>Click Me</button>
```

### Meter & Progress

```html
<meter value="70" min="0" max="100">70%</meter>
<progress value="30" max="100">30%</progress>
```

---

## ✅ Conclusion

This README provides a complete overview of **commonly used HTML elements**. Clone this repo to practice or use it as a handy reference.

> Built with ❤️ by Arin Mandal
