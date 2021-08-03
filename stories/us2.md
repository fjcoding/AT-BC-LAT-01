# User Stories

## User story 2: Lets add some action

System is currently capable to set and scenario with actors and actions, and the scenario assumes that every time that an actor attacks, it successfully hits an enemy. If enemy does not have enough health to survive the hit, it dies.

Now, we need to consider the possibility that actors can shoot each other, but there is a chance to miss. This means, they can shoot each other, but depending on their position in the scenario, they can hit the enemy or miss the shoot. Assume that scenario has a default 100x100 size in a 2 dimensions area. A position set as X and Y define the location of each actor in the scenario. X and Y should never be higher than the dimensions of the scenario (100), where X is the horizontal axis position, and Y is the vertical axis position in the scenario.

For example, take the following scenario:

PUT /actor
```
{
    "scenario": <scenario id>
    "name": "Marco",
    "type": "PF Squad Soldier",
    "health": 1,
    "weapon": {
        "name": "handgun",
        "power": 1,
        "xScope": 1,
        "yScope": 1
    },
    "position": {
        "xPos": 0,
        "yPos": 0
    }
}
```

This should add a new actor to scenario with \<scenario id\> id, response would look like this:
```
{
    "code": 200,
    "actor": "Marco",
    "scenario": "<scenario id>"
}
```

And suppose we add a couple of enemies as well

PUT /actor
```
{
    "scenario": <scenario id>
    "name": "RAS1"
    "type": "Rebel Army soldier",
    "health": 1,
    "weapon": {
        "name": "rifle",
        "power": 1,
        "xScope": 1,
        "yScope": 1
    }
    "position": {
        "xPos": 100,
        "yPos": 0
    }
}
```

PUT /actor
```
{
    "scenario": <scenario id>
    "name": "RAS2"
    "type": "Rebel Army soldier",
    "health": 1,
    "weapon": {
        "name": "rifle",
        "power": 1,
        "xScope": 1,
        "yScope": 1
    }
    "position": {
        "xPos": 5,
        "yPos": 5
    }
}
```

If \<scenario id\> is not specified (or it does not exist), a new scenario should be created. Response would be similar to the one above.
Notice that when an actor is created using /actor endpoint, it will add a new object to "actors" property in the "scenario" json persisted in the database.

Database JSON should look like this
```
{
    "scenario": <scenario id>
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "handgun",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        },
        "position": {
            "xPos": 0,
            "yPos": 0
        }
    },{
        "name": "RAS1"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 100,
            "yPos": 0
        }
    },{
        "name": "RAS2"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 5,
            "yPos": 5
        }
    }]
}
```

We need to support something similar for actions and weapons, but now, weapon will be loaded to the actor we specify, say for example:

POST /weapon
```
{
    "scenario": "<scenario id>"
    "actor": "Marco"
    "name": "shotgun",
    "power": 10,
    "xScope": 10,
    "yScope": 5,
}
```

After this request is successfully executed (actor "Marco" must exist), the scenario in database looks like:
```
{
    "scenario": <scenario id>
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "shotgun",
            "power": 10,
            "xScope": 10,
            "yScope": 5,
        },
        "position": {
            "xPos": 0,
            "yPos": 0
        }
    },{
        "name": "RAS1"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 100,
            "yPos": 0
        }
    },{
        "name": "RAS2"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 5,
            "yPos": 5
        }
    }]
}
```

An if we add an action, request will be like:

PUT /action
```
{
    "scenario": <scenario id>
    "actor": "Marco",
    "use": "weapon",
    "target": "east",
}
```

Scenario looks like:
```
{
    "scenario": <scenario id>
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "shotgun",
            "power": 10,
            "xScope": 10,
            "yScope": 5,
        },
        "position": {
            "xPos": 0,
            "yPos": 0
        }
    },{
        "name": "RAS1"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 100,
            "yPos": 0
        }
    },{
        "name": "RAS2"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 5,
            "yPos": 5
        }
    }],
    actions: [{
        "actor": "Marco",
        "use": "weapon",
        "target": "east"
    }]
}
```

And then, run the scenario:

GET /scenario/\<scenario id\>

Response
```
{
    "code": 202
    "result": {
        "Marco": "alive",
        "RAS1": "alive",
        "RAS2": "death"
    }
}
```

RAS 1 is death, because Marco used his shotgun weapon, which has xScope=10 and yScope=10. The scope defines the positions in the scenario affected by the weapon shoot. 
The positions are actor position plus weapon scope. In this case Marco's X position is 0 and Y position is 0, plus his weapon xScope that is 10 and yScope is 5, 
horizontal area affected goes from X=0 to X=10 and from Y=0 to Y=5. RAS1 position is X=5 and Y=5, which is inside the area affected by Marco's shoot of his weapon (shotgun), 
then, RAS1 dies. Something that does not happen for RAS2, whose Y position is 0, but X is 100, making him stay out of the scope of the area affected by the shoot.

Notice that "target" defines the direction of the action, in this case, "east" adds weapon's xScope to actor's position. There are four possible values for "Target":
- "east" - adds xScope to xPos
- "west" - substracts xScope to xPos
- "north" - adds yScope to yPos
- "south" - substracts yScope to yPos

With examples above, user story can be summarized as:
- As Metal Slug Maker user, I want to be able to create actors and actions with X and Y positions in a 2D area, so I can have them available for running actions like 
shoot weapon using X and Y references for the attack scope.
- As Metal Slug Maker user, I want to be able to set weapons for actors, so I can modify their power attack when they use a weapon

Notice that I could run similar actions for RAS* soldiers. Actions could be also run without the need to persist them in the database, just by running a POST request:

POST /action?scenarioId=\<scenario id\>
```
{
    "actor": "RAS1",
    "use": "weapon"
    "target": "west"
}
```

Response
```
{
    "code": 202
    "result": {
        "Marco": "alive",
        "RAS1": "alive",
        "RAS2": "death"
    }
}
```

Marco still alive because he is too far away to get hit by RAS1 shoot. Notice that we are not considering movement and time progress yet, that comes later ;)

Say another example for the scenario below

```
{
    "scenario": <scenario id>
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "shotgun",
            "power": 10,
            "xScope": 10,
            "yScope": 5,
        },
        "position": {
            "xPos": 0,
            "yPos": 0
        }
    },{
        "name": "RAS1"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 100,
            "yPos": 0
        }
    },{
        "name": "RAS2"
        "type": "Rebel Army soldier",
        "health": 1,
        "weapon": {
            "name": "rifle",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        }
        "position": {
            "xPos": 1,
            "yPos": 0
        }
    }]
}
```

POST /action?scenarioId=\<scenario id\>
```
{
    "actor": "RAS2",
    "use": "weapon",
    "target": "west"
}
```

Response
```
{
    "code": 202
    "result": {
        "Marco": "death",
        "RAS1": "alive",
        "RAS2": "alive"
    }
}
```
Marco has been shoot by RAS2, because of RAS2's weapon scope, and his position close to Marco