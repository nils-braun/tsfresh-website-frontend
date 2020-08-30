# tsfresh-website frontend

This repo contains everything needed for the tsfresh website frontend.

To start developing, run

	conda create -n tsfresh-website nodejs
	conda activate tsfresh-website
	npm install

And for starting the server

	npm run dev	

## Deployment

Currently, we deploy to GCP as a Cloud Run. However, in the future we might want to move
to something without computation.

	gcloud builds submit --tag gcr.io/tsfresh-website/frontend
	gcloud run deploy --image gcr.io/tsfresh-website/frontend --platform managed 

