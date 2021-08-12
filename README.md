# Serverless Typescript Template

This is a template repo containing the basic elements required for creating an AWS Serverless API
in typescript using DynamoDB for persistence.

## Deploying locally

To start dynamo db and the lambda functions locally you should run:

```bash
sls offline start
```

This will spin up the services locally on port 3000 with some data seeded into dynamo db. To call
the get widgets endpoint you can use the following command:

```bash
curl "http://localhost:3000/dev/widgets"
```

## Deploying on AWS

To deploy the API onto AWS you can run the following command:

```bash
sls deploy
```

To remove resources from AWS you can run:

```bash
sls remove
```