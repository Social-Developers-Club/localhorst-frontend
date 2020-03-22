# Localhorst Frontend
This  Repository contains the source code for the frontend, which is hosted here [here](http://support-for-localhorst.philenius.de/).

## About
This project was develop during the [#wirvsvirus](https://wirvsvirushackathon.org/) hackathon. The whole idea and project is described
 in [devpost](https://devpost.com/software/1_016_a_lokale_unternehmen_support_your_localho-r-st).

## Angular Project Structure
The source code itself is structured into the follwoing directorys:
- models: contains data models
- pages: contains the components that build up a single page
- services: contains the used serives
- shared-components: contains components that are used inside multiple pages

## Dependencies
The project uses [Angular Material](https://material.angular.io/) and [Material Icons](https://material.io/resources/icons/?style=baseline).
The chatbot UI is build using components of the [kendo angular ui](https://www.telerik.com/kendo-angular-ui/components/conversationalui/integrations/dialogflow/) framework, which we re-styled to achieve the look and feel fitting to the rest of the website.

## Build & Deployment
The project is build using Angular, packed into Docker. The Angular README and manual can be found [here](/app/README.md).

This is how to build and run the docker container:
`docker build -t supportforlocalhorst/localhorst-frontend .`

### Note!
To run the whole application locally and to use all features all the related backends(see below) need to be deployed. Also the `apiUrl` in the [RecommendationService](/app/src/app/services/recommendation.service.ts), which is used to access the chatbot backend, needs to be changed accordingly.

Also you can find the Docker image in [DockerHub](https://hub.docker.com/repository/docker/supportforlocalhorst/localhorst-frontend).

## Architecture
![architecture overview diagram](/Architecture.png)

## Related-Repositories
- [localhorst-backend](https://github.com/Social-Developers-Club/localhorst-backend)
- [localhorst-chatbot-backend](https://github.com/Social-Developers-Club/localhorst-chatbot-backend)
- [localhorst-elasticsearch](https://github.com/Social-Developers-Club/localhorst-elasticsearch)
