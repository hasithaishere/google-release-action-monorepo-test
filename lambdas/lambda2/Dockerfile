FROM public.ecr.aws/lambda/nodejs:20

COPY . .

RUN npm install --omit=dev

CMD ["index.handler"]