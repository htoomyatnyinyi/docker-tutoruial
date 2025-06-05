FROM node

WORKDIR /usr/app

COPY ./package.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 8800

# Define environment variables
ENV DATABASE_URL="mysql://root:hmnn@localhost:3306/mydata"

CMD [ "npm", "run", "server" ]