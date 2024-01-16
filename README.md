# Welcome 

- This is an Astro version of the static website at https://seannebuoy.art.
- To rehydrate this app, run "npm install" and then "npm run dev".

## Features

- Built with Astro
- Parameterized routing (work/pieceId)
- Static JSON data file of artwork for easy maintenance
- Unique <head></head> content on each page
- Built with accessibility in mind (color contrast, aria attributes, focus rings, headline hierarchy, etc.)
- Uses webp and jpg images
- Renders in light mode or dark mode
      
## Future Improvements

- Improve accessibility of mobile menu 
- Add JSON data to a database        
- Add data loader
- Provide pages to add and edit artwork online 
- Image compression/optimizer or lazy load   

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Installation

- Make sure your Node version is 18.14.1 or newer ("node -v")
- cd to the correct directory and "npm install"
- "npm run dev" 
- When ready to generate files for the web: "npm run build"
- Push modified files to the web server
- To disable the toolbar: "npm run astro preferences disable devToolbar"
