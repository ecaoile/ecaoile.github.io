# Class 06 Reading

## HTTP: Hyper Text Transfer Protocol

- state request-response application protocol
- client-server computing model for apps using HTTP

## HTTP Requests

- contains method, URL, and HTTP version
- followed by headers (key value pair) separated by a newline character
- optionally followed by body
- safe methods: used for retrieval and don't change state
- **idempotent**: two identical requests get identical response
- **cacheable**: clients can cache the response

Example response:

```
HTTP/1.1 200 OK
Date: Tue, 22 Aug 2017 06:34:16 GMT
Content-Type: application/json; charset=UTF-8
Content-Encoding: UTF-8
Content-Length: 82
Last-Modified: Mon, 21 Aug 2017 12:10:38 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Connection: close

{"id":"1234123412341324","title":"kata","content":"get 100 points on hacker rank"}
```

## REST

- REpresentational State Transfer (can reference, manipulate, and transfer state)
- uses methods to operate on the state of a resource generally using HTTP

## RESTful Endpoints

- example: `http://api.server.com/api/v1/people`
- http:// - protocol/scheme
- api.server.com - domain or server
- /api/v1 - API endpoint
- /people - the resource (collection of people)
- /people/12345 - specific person with ID 12345

## REST Methods

- get, post, put, patch, destroy
- usually delivered in JSON

Example header:

```
{
  "count": 126,
  "rpp": 10,
  "page": 1,
  "next": "http://api.server.com/api/v1/people?page=2",
  "previous":null,
  "results": [
    {},
    {},
    ...
  ]
}
```

## Rest Documentation (Swagger)

- standard is Open API (Swagger)
- presents a way for devs to see and use an API
- [example Swagger doc](https://app.swaggerhub.com/apis/ahardia/swapi/1.0.0#/)
- use [Swagger inspector](https://inspector.swagger.io/builder) to create .yml or JSON
