# How to build & deploy
# run script `npm run build`
# run script `docker build -t registry.quadrakaryasantosa.com/portfolio-[name]:v0.1 .`
# run script `docker push registry.quadrakaryasantosa.com/portfolio-[name]:v0.1`

FROM node:18-alpine
LABEL author="asb"

WORKDIR /app

COPY yarn.lock ./
COPY node_modules ./node_modules
COPY public ./public
COPY next.config.js ./

COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]