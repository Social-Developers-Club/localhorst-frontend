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

This is how to build the Docker image:
```bash
docker build -t supportforlocalhorst/localhorst-frontend .
```

:warning:
This frontend application connects to two different backends. In order to run the frontend application locally, all related backend applications need to be deployed. See the README of [localhorst-backend](https://github.com/Social-Developers-Club/localhorst-backend) on how to start the _backend_ and its associated database. The chatbot backend (Dialogflow fulfillment) must be deployed in order to use the integrated chat bot within the frontend. For more on this application see [localhorst-chatbot-backend](https://github.com/Social-Developers-Club/localhorst-chatbot-backend).

The frontend needs to know where its backend is running. For this purpose, the variable `apiRoot` in [RecommendationService.ts](/app/src/app/services/recommendation.service.ts) must point towards your local backend instance. After changing this variable's value, you'll have to rebuild the Angular frontend application.

Also you can find the Docker image in [DockerHub](https://hub.docker.com/repository/docker/supportforlocalhorst/localhorst-frontend).

## Architecture
![architecture overview diagram](/Architecture.png)

## Related-Repositories
- [localhorst-backend](https://github.com/Social-Developers-Club/localhorst-backend)
- [localhorst-chatbot-backend](https://github.com/Social-Developers-Club/localhorst-chatbot-backend)
