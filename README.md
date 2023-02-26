# NodeCG Bundle for Misstype Tourist Online Gen.2

## Run locally

```
docker compose build --build-arg LAYOUTS_NAME=misstype-tourist-online-gen2
docker compose up -d
```

`http://localhost:9090/`

## Deploy to AWS

Using [AWS Copilot CLI](https://aws.github.io/copilot-cli/ja/):

1. `copilot app init --domain any.domain`
2. `copilot env init`
3. `copilot env deploy`
4. `copilot app init`
5. `DOMAIN=subdomain.any.domain copilot app deploy`

Follow the message like below:

```
  - The validation process for https://subdomain.any.domain can take more than 15 minutes.
        Please visit https://console.aws.amazon.com/apprunner/home to check the validation status.
```
