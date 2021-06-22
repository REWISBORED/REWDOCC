## Requirements

1. Node

## Setup of project
 
To setup the project follow the following steps:

1. Clone the repository
2. In the dicretory of project run the following commands

```
npm install
npm start
```


## Routes of Project

Create a user : 

```
curl -X POST \
  http://localhost:3000/user/signup \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 78178780-a7e5-4853-9082-490378c1babe' \
  -H 'cache-control: no-cache' \
  -d '{
	"name":"Doctor3",
	"username":"doctor3",
	"password":"1234",
	"email":"doc3@example.com",
	"role":"doctor"
}'
```

List of Doctors:

```
curl -X GET \
  http://localhost:3000/user/doctor \
  -H 'Postman-Token: 117b3f61-58da-4f67-882f-dde12d327307' \
  -H 'cache-control: no-cache'
```

Login User:

```
curl -X POST \
  http://localhost:3000/user/login \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: e277c78f-feef-4dce-9628-1ab95dc88558' \
  -H 'cache-control: no-cache' \
  -d '{
	"username":"example2",
	"password":"1234"
}'
```

Create an Appointment:

```
curl -X POST \
  http://localhost:3000/appointment/create \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUyIiwiaWF0IjoxNjI0Mzc0Njg4fQ.OoMHP2XgBjYsIBjEN_YLiw7vAWLeyQRShi6ow3s6Ros' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 53c760d6-3d16-4681-b647-d3dd12482f61' \
  -H 'cache-control: no-cache' \
  -d '{
	"date":"22 June 20:22",
	"doctor":"example"
}'
```

List all Appointments:

```
curl -X GET \
  http://localhost:3000/appointment/appointments \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUyIiwiaWF0IjoxNjI0Mzc0Njg4fQ.OoMHP2XgBjYsIBjEN_YLiw7vAWLeyQRShi6ow3s6Ros' \
  -H 'Postman-Token: c033ce66-f08a-454d-86d1-ce68c2cfcd57' \
  -H 'cache-control: no-cache'
```
