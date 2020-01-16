#### 创建docker文件

\

```
# Check out https://hub.docker.com/_/node to select a new base image

FROM node

\# Set to a non-root built-in user `node`

USER node

\# Create app directory (with user `node`)

RUN mkdir -p /home/node/mgame

WORKDIR /home/node/mgame

\# Install app dependencies

\# A wildcard is used to ensure both package.json AND package-lock.json are copied

\# where available (npm@5+)

COPY --chown=node package*.json ./

RUN npm install

\# Bundle app source code

COPY --chown=node . .

RUN npm run build

\# Bind to all network interfaces so that it can be mapped to the host OS

ENV HOST=0.0.0.0 PORT=3000



EXPOSE ${PORT}

CMD [ "npm", "start" ]

\# CMD [ "node", "." ]
```

#### 创建docker镜像

```
docker build -t mgame:latest .
```

#### 创建docker容器

```
docker run -itd --name mgame -p 3000:3000 mgame
```

