FROM node:21 AS builder

ARG AMBIENTE

ADD . /build

WORKDIR /build

RUN npm install --force \
    && npm run build --dev 

FROM nginx:1.25.4-alpine

#RUN echo "America/Recife" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

COPY --from=builder /build/dist /usr/share/nginx/html
