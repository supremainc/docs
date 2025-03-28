# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Print

```
node generatepdf -b "http://localhost:4000/docs" -u "http://localhost:4000/docs/cover?title=BioStar X&sub=Revision Notes&ver=Version 1.4.4&lang=한국어&num=KO 301.00.XP2&next=/platform/biostar_x/toc" --prince-args="--page-size='a4' --page-margin='0mm' --style=./print.css --javascript" -o ./pdf/biostar.pdf --dest ./pdf --include-index

node generatepdf -u "http://localhost:3004/docs/platform/biostar_x" --prince-args="--page-size='a4' --page-margin='0mm' --style=./print.css --javascript" -o ./pdf/biostar.pdf --dest ./pdf --include-index

prince --no-warn-css  --input-list=./pdf/localhost-docs-cover.txt -o ./pdf/biostar.pdf --page-size='a4' --style=./print.css
```