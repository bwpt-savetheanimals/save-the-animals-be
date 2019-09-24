# save-the-animals-be
backend repo for Save the Animals

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)

## General info
the backend server for the save the animals website. A fake website to showoff our skills. Designed to be a crowdfunding website for animal conservation projects.

https://savetheanimals-be.herokuapp.com/

## Technologies
bcrypt
jwt

## Setup
runs locally off of node

## Features
List of features ready and TODOs for future development

### <GET> to '/api/cams' return list of all conservation campaigns


Some color-syntaxing enrichment can be applied with the following blockcode syntax

```javascript
{
	campaigns: [
		{id: 1,
		cam_name: "Save the Sunda Pangolin",
		loc_name: "Southeast Asia",
		cam_urgency: "critical",
		cam_deadline: "2022-02-20",
		cam_goal_met: 0
	}, {
		id: 2,
		cam_name: "Test 2",
		loc_name: "Yellowstone National Park",
		cam_urgency: "not",
		cam_deadline: "2022-02-20",
		cam_goal_met: 0
	}]
}
```


### <GET> to '/api/cams/:id return a single campaign and applicable donations

```javascript
{
	campaign: {
		id: 1,
		cam_name: "Save the Sunda Pangolin",
		cam_description: "Highly valued for their scales and meat.",
		loc_name: "Southeast Asia",
		cam_urgency: "critical",
		cam_goal: 100000,
		cam_deadline: "2022-02-20",
		cam_goal_met: 0
	},
	donations: [{
		username: "Sunda",
		don_amount: 10000
		}, {
		username: "Plat",
		don_amount: 5000
	}]
}
```

### <POST> to '/api/users/register' to register a new user. returns the new user with a webtoken.

- send: 
```javascript
{
	"username": "TestUser1",
	"password": "TestPass"
}
```
- receives:
```javascript
{
    "new_user": {
        "id": 4,
        "username": "TestUser1",
        "password": "$2a$15$zCtLVZpBfMfyNhem05TCS.74IXemOInUVnKnoRsl48ovKFWQvP.n2"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiVGVzdFVzZXIxIiwiaWF0IjoxNTY5Mjg5NDQxLCJleHAiOjE1NjkzMTgyNDF9.hK-7z8OnKQjI9SblfbGzu-H7O08L6JEbxr94mOlv4DI"
}
```
### <POST> to '/api/users/login' to login. return welcome message and a token

- send:
```javascript
{
	"username": "TestUser1",
	"password": "TestPass"
}
```
- receive:
```javascript
{
    "message": "welcome TestUser1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiVGVzdFVzZXIxIiwiaWF0IjoxNTY5Mjg5NzEyLCJleHAiOjE1NjkzMTg1MTJ9.5sZqeMC0c4XKZss8V3599KvRIa8bmswoqb8yK8skiNU"
}
```

To-do list:
* restricted routes
