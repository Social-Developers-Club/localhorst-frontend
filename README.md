# Localhorst Frontend
This  Repository contains the source code for the frontend.

## About
This project was develop during the [#wirvsvirus](https://wirvsvirushackathon.org/) hackathon. The whole idea and project is described
 in [devpost](https://devpost.com/software/1_016_a_lokale_unternehmen_support_your_localho-r-st).

## Build & Deployment
The project is build as a Docker container.

### Build
`docker image build -t localhorst .`

### Run
`docker container run --publish 8000:8080 --detach --name bb localhorst`

## Architecture
![architecture overview diagram](/Architecture.png)

## Related Repositories
- [localhorst-backend](https://github.com/Social-Developers-Club/localhorst-backend)
- [localhorst-chatbot-backend](https://github.com/Social-Developers-Club/localhorst-chatbot-backend)
- [localhorst-elasticsearch](https://github.com/Social-Developers-Club/localhorst-elasticsearch)
