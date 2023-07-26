# Introduction
Thank you for being interested in contributing content to `stfc.academy`! This guide will walk you through how to contribute content in the form of articles on the page. 

# Built with Docusaurus
`stfc.academy` is built using _Docusaurus_, a "Static Site Generator" by Meta/Facebook used to create documentation websites. Information on the internal workings on specifics of Docusaurus can be found [on their website](https://docusaurus.io/docs). However, this guide should give you a quick start for contributing to `stfc.acadmey`.

A few quick notes about how Docusaurus works before continuing:
- Docusaurus uses a system called `MarkDown` to populate and format pages. 
  - Find specific information about formating using MarkDown [here](https://docusaurus.io/docs/markdown-features).
- You can also use an extension of _markdown_ called `MDX` to include JavaScript/TypeScript inside of a MarkDown page.
  - FInd more information about how to use this functionality [here](https://docusaurus.io/docs/markdown-features/react).

# Page Structure
The bulk of the content for `stfc.academy` is located in the `stfc-academy/docs/` directory. In this directory is a file called `index.md` and additional folders for sub-pages. 

Every page that exists on the site lives in a directory with an `index.md` file. Any assets that are used on this page will also live in this folder. Sub-pages will also exist in this folder and then follow the same architecture. For example: If there is a picture called `picture.png` that is used on the page `Fancy Page` and there is a sub-page called `Fancy Sub-Page`, the file structure will look like:
```
/fancy-page/
  index.md
  picture.png
  /fancy-sub-page/
    index.md
```

## Editing Existing Pages
If you would like to edit an existing page, you will need to find the folder that the page exists in and edit the `index.md` file that lives in that folder.

## Creating New Pages
If you would like to create a new page. Determine where the new page should live as a sub-page, and create a new directory to host the page. Create a new file called `index.md` in the new directory, and add your content there. 
