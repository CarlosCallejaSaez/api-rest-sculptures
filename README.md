# ***api-rest-sculptures***

| HTTP    | ENDPOINT                                 |                                                                       |
|---------|------------------------------------------|-----------------------------------------------------------------------|
| GET     | http://localhost:4001/api/sculptures     | Get all sculptures in DB                                              |
| GET     | http://localhost:4001/api/sculptures/:id | Get from DB sculpture with the id choosen                             |
| POST    | http://localhost:4001/api/sculptures     | Create a new sculpture in DB with the body data                       |
| PUT     | http://localhost:4001/api/sculptures/:id | Update the sculpture in the DB with the id choosen with the body data |
| DELETE  | http://localhost:4001/api/sculptures/:id | Delete from DB sculpture with the id choosen                          |
| * (404) | http://localhost:4001/bad-path           | Return a 404 Error message                  