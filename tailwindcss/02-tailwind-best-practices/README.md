# Tailwind CSS Best Practices

This project demonstrates best practices for using Tailwind CSS, including theming, utility-first workflows, and automated class sorting with the `prettier-plugin-tailwindcss`. It features a modern Hero section as an example.

## Features

- **Tailwind Theming:**  
  Uses custom theme colors (e.g., `primary`, `sky`, `yellow`, `pink`) for consistent branding and easy color management across the project.

- **Prettier Plugin for Tailwind:**  
  The [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) automatically sorts Tailwind classes in your code, keeping your markup clean and maintainable.  
  To enable, add this to your `.prettierrc`:

  ```json
  {
    "plugins": ["prettier-plugin-tailwindcss"]
  }
  ```

  Then run:

  ```sh
  npx prettier --write .
  ```

- **Hero Component Example:**  
  The Hero section showcases how to use theme colors and utility classes for rapid prototyping and beautiful UI.

## Preview

![Hero Preview](public/image.png)

---

**Tip:**  
Use theme variables in your Tailwind config for easy color changes and a consistent look
