# Install NodeCG
FROM node:lts-alpine AS nodecg
WORKDIR /app
RUN apk --no-cache add git &&\
    git clone --depth 1 --branch v2.1.11 https://github.com/nodecg/nodecg.git &&\
    cd nodecg &&\
    npm install &&\
    npm run build

# Build apps
FROM node:lts-alpine AS build
WORKDIR /build
COPY . ./
RUN npm install &&\
    npm run build &&\
    npm run build:extension

# Set up 
FROM node:lts-alpine
ARG LAYOUTS_NAME
WORKDIR /app
COPY --from=nodecg /app/nodecg ./nodecg
COPY --from=build /build/dist ./nodecg/bundles/${LAYOUTS_NAME}/
COPY package-nodecg.json ./nodecg/bundles/${LAYOUTS_NAME}/package.json
WORKDIR /app/nodecg
EXPOSE 9090
CMD ["node", "index.js"]
