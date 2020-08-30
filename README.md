# tsfresh-website frontend

This repo contains everything needed for the tsfresh website frontend.

To start developing, run

	conda create -n tsfresh-website nodejs
	conda activate tsfresh-website
	npm install

And for starting the server

	npm run dev	

## Deployment

Deployment goes via github actions to gh-pages. You can also do it manually:

	npm run export
	npm run deploy
