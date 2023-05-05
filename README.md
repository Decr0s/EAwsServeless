# Serveless Application

This is a project for AWS CDK (development kit) with TypeScript to create
a serveless application with Lambda, API Getaway and DynamoDB.
The application consists of a service that recives HTTP requests and stores them in a
DynamoDB database.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
