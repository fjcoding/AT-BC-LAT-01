# User Stories

## User story 1: Can you build a metal slug scenario analyzer?

Initially, lets start small. We need to build a REST API service that is capable of processing requests for the building blocks of Metal Slug maker. We basically need to understand the following concepts:

-   Scenario, contains all the elements for a sequence of events happening in Metal Slug. An scenario is composed by actors and actions
-   Actors, are the elements inside an scenario that can do different actions (say, actor "Marco" can do action "use weapon", while actor "enemy soldier" can "get attacked" by "weapon")
-   Actions, the things that "Actors" are capable to do

For describing scenarios, we will use API request and JSON format similar to the one showed below

POST /scenario

```
{
    actors: [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "weapon": "Handgun"
    },{
        "name": "RAS1"
        "type": "Rebel Army soldier",
        "weapon": "rifle"
    },{
        "name": "RAT1",
        "type": "Rebel Army Tank",
        "weapon": "tank cannon"
    }],
    actions: [{
        actor: "Marco",
        action: "Pick Shotgun"
    },{
        actor: "Marco",
        action: "Shoot Weapon"
    },{
        actor: "RAS1",
        action: "receive attack",
        from: "Marco"
    },{
        actor: "RAT1",
        action: "receive attack",
        from: "Marco"
    }]
}
```

Response

```
{
    "code": 202
    "result": {
        "Marco": "alive",
        "RAS1": "death",
        "RAT1": "alive"
    }
}
```

POST /scenario

```
{
    actors: [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "weapon": "Handgun"
    },{
        "name": "RAS1"
        "type": "Rebel Army soldier",
        "weapon": "rifle"
    }],
    actions: [{
        actor: "Marco",
        action: "Pick Shotgun"
    },{
        actor: "Marco",
        action: "Shoot Weapon"
    },{
        actor: "RAT1",
        action: "receive attack",
        from: "Marco"
    }]
}
```

Response

```
{
    "code": 400
    "error": "RAT1 actor does not exist"
}
```

As part of initial requirements, we need:

-   API should be able to persist scenarios created with actors and actions
-   A REST API capable of handle requests like the ones described above
    -   POST /scenario should receive a actors/actions body and return the result of such scenario execution
    -   PUT /scenario should receive a actors/actions body and persist the scenario with an scenario id. Request response should return scenario id
    -   GET /scenario/{id} should execute the scenario persisted with id {id} and return the result of scenario execution