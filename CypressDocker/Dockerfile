FROM cypress/included:3.2.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY . .
RUN npm install
ENTRYPOINT ["npm","run"]
