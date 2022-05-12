# nextjs-antd-tailwind
this project is built by combining [NextJS](https://nextjs.org/), [Ant Design](https://ant.design/) and [TailwindCSS](https://tailwindcss.com/) with the aim of making it easier to build a project whose style is easy to customize

# Build with
* [TypeScript](https://www.typescriptlang.org/)
* [ReactJS](https://reactjs.org/)
* [NextJS](https://nextjs.org/)
* [Sass](https://sass-lang.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Ant Design](https://ant.design/)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file. and you can override style or make style in `src/styles`

# Folder Structure
```
nextjs-antd-tailwind/
|
|- public
|- src/
|   |-components/ --> atomic design
|   |   |-atoms
|   |   |-moleculs
|   |   |-organisms
|   |   |-index.ts
|   |
|   |- layouts
|   |- pages
|   |- routes
|   |- styles/  --> sass folder
|   |   |-base
|   |   |-components
|   |   |-sass-utils
|   |   |-vendors
|   |   |-style.scss
|
|- .eslintrc.json
|- .prettierignore
|- .prettierrc.js
| ...
|- postcss.config.js
|- tailwind.condig.js
| ...
```