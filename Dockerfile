# https://github.com/nodejs/docker-node#how-to-use-this-image
FROM node:12
EXPOSE 6006
RUN 'npm install'
