# Localhorst Frontend
This  Repository contains the source code for the frontend, which is hosted here [here](http://support-for-localhorst.philenius.de/).

## About
This project was develop during the [#wirvsvirus](https://wirvsvirushackathon.org/) hackathon. The whole idea and project is described
 in [devpost](https://devpost.com/software/1_016_a_lokale_unternehmen_support_your_localho-r-st).

## Build & Deployment
The project is build using Angular, packed into Docker. The Angular README and manual can be found [here](/app/README.md).

This is how to build and run the docker container:

`docker build -t supportforlocalhorst/localhorst-frontend .`

Also you can find the Docker image in [DockerHub](https://hub.docker.com/repository/docker/supportforlocalhorst/localhorst-frontend).

## Architecture
![architecture overview diagram](/Architecture.png)

## Related Repositories
- [localhorst-backend](https://github.com/Social-Developers-Club/localhorst-backend)
- [localhorst-chatbot-backend](https://github.com/Social-Developers-Club/localhorst-chatbot-backend)
- [localhorst-elasticsearch](https://github.com/Social-Developers-Club/localhorst-elasticsearch)
