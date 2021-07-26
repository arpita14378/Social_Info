FROM node:13.12.0-alpine
WORKDIR /loginPage
ENV PATH /Myworks/LoginPage/loginPage/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
copy . .
CMD ["npm","start"]
