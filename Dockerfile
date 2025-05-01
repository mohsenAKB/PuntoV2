FROM node:19.8.1 as build

# Set working directory
WORKDIR /code

# Copy the package.json and package-lock.json to the Docker environment
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install -f

# Copy the rest of the application code
COPY . .

# Copy .env content
ARG APP_ENV
RUN echo "${APP_ENV}" > ./.env

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]

