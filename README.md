## webpack-starter
*webpack starter template for web projects*

### Install
You can you use **yarn** or **npm**  package manager in order to run this starter

    npm i 

### Features
* Code splitting
* SASS
* Pug

### Run 
> Common codes will be exported in files named *common*

**Production**

	npm run build
**Development**

	npm run dev
Run in **development**  mode with *webpack-dev-server*
	
	npm run start
Run in **development** mode with *webpack-dev-server* and watch the webpack config files with *nodemon*
	
	npm run start:dev
> *nodemon* must be installed in your machine in order to run this command
--------
### File structure
The file structure was realized under [BEM](https://en.bem.info/methodology/filestructure/) concepts

All common files should be in *common.** folders
All components should be in components folder and have their required files

