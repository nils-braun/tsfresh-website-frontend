FROM node:13-slim as builder

WORKDIR /app
COPY . /app
RUN npm install \
 && `npm bin`/next build \
 && `npm bin`/next export

FROM python

WORKDIR /app
COPY --from=builder /app/out /app

EXPOSE 8000
CMD ["python", "-m", "http.server"]