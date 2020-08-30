FROM node:13-slim as builder

WORKDIR /app

# Install all dependencies
COPY package*.json ./
RUN npm install

# Now build and export the application itself
COPY . .
RUN `npm bin`/next build \
 && `npm bin`/next export

# Create a new image just containing the server
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

ENV PORT 8080
ENV HOST 0.0.0.0

RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"

COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
