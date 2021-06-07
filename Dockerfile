# https://github.com/nodejs/docker-node#how-to-use-this-image
FROM node:14
EXPOSE 6006
RUN 'npm install'
