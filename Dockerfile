<<<<<<< Updated upstream
FROM node:21 AS builder
=======
FROM node:20 AS builder
>>>>>>> Stashed changes

ARG AMBIENTE

ADD . /build

WORKDIR /build

<<<<<<< Updated upstream
RUN npm install --force \
    && npm run build --dev 
=======
RUN npm install \
    && npm run build --mode ${AMBIENTE} --base-href=/
>>>>>>> Stashed changes

FROM nginx:1.25.4-alpine

#RUN echo "America/Recife" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

COPY --from=builder /build/dist /usr/share/nginx/html
