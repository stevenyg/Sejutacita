## How to run local with docker

1. install docker & docker compose

```
https://docs.docker.com/get-started/
```

2. run docker-compose command

```
docker-compose up -d
```

3. check if container is running

```
docker-compose ps
```

4. if you see result like this you are good to go

![](docker-compose-result.png)

5. go to browser and access

```
http://localhost:4000 (orchestrator / gateway)

http://localhost:3000 (service)
```

6. enjoy

## API Documentation

Request POST /register

```
response 201

{
    "message": "User Registered"
}

```

Request POST /login

```
response 200
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlMjczNjdjZDRmYTIwNWEzNzZlOGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI0Mzg2MTQsImV4cCI6MTY1MjQzODczNH0.s50Z-NrDUbQCrInk7tSRzZLUcRh7h5qqAIJorOfATAA",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlMjczNjdjZDRmYTIwNWEzNzZlOGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI0Mzg2MTQsImV4cCI6MTY1MjQzOTIxNH0.7W402cP3aSFr2m2oJkXzYBnQ9vz9yvecsgFsacv534c"
}
```

Request POST /refresh

```
response 200
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlMjczNjdjZDRmYTIwNWEzNzZlOGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI0Mzg2MTQsImV4cCI6MTY1MjQzODczNH0.s50Z-NrDUbQCrInk7tSRzZLUcRh7h5qqAIJorOfATAA",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlMjczNjdjZDRmYTIwNWEzNzZlOGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTI0Mzg2MTQsImV4cCI6MTY1MjQzOTIxNH0.7W402cP3aSFr2m2oJkXzYBnQ9vz9yvecsgFsacv534c"
}
```

Request GET /music

```
response 200

{
    "musics": [
        {
            "_id": "627a3e35044ef88601e63487",
            "title": "qwe",
            "genre": "qwe",
            "singer": "qwe"
        },
        {
            "_id": "627a4662d9b3265b88813993",
            "title": "123",
            "genre": "abc123",
            "singer": "abc123"
        },
        {
            "_id": "627e28d157fd4d2a5dd999f8",
            "title": "silent",
            "genre": "pop",
            "singer": "abc"
        }
    ]
}
```

Request POST /music

```
response 201

{
    "message": "Music Created"
}
```

Request PUT /music/\_id

```
response 200
{
    "message": "Music Updated"
}

```

Request DELETE /music/\_id

```
response 200
{
    "message": "Music Deleted"
}
```

GLOBAL RESPONSE

```
{
    "message" : "Internal Server Error"
}

OR

{
    "message" : "JWT Mus be provided"
}

OR

{
    "message" : "JWT is expired"
}
```
