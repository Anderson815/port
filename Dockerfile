FROM node:24.4.1 AS base
WORKDIR /usr/app
COPY . .
ENV TZ="America/Sao_Paulo"
RUN npm install

#DEV
FROM base AS dev
# RUN npm run dbpull
# RUN npm run dbgenerate
EXPOSE 3333 9229
CMD ["npm", "run", "start:debug"]

#PRODUCTION E HOMOL BUILD
FROM base AS prod
RUN npm run dbpull
RUN npm run dbgenerate
RUN npm run build
EXPOSE 3333
ENTRYPOINT ["npm", "run", "start"]