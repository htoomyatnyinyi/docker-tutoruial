FROM node

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]


# 
# FROM node:18 AS build
# WORKDIR /usr/app
# COPY ./frontend .
# RUN npm install
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /usr/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
