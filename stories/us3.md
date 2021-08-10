# User Stories

## User story 3: scenes

Now that we have scenarios, actors, weapons and actions, we have to get closer to animated experience of war happening. In order to achieve this, scenario should specify the number of scenes that this scenario will contain, for example:

POST /scenario

```
{
    "scenes": 5,
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "handgun",
            "power": 1,
            "xScope": 1,
            "yScope": 1,
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
            "xPos": 5,
            "yPos": 0
        }
    }],
    "actions": [{
        "actor": "Marco",
        "use": "weapon",
        "target": "east"
        "scenes": 100
    }]
}
```

Response
```
{
    "code": 202
    "result": {
        "Marco": "alive",
        "RAS1": "alive"
    }
}
```

How did this happen? lets imagine that example below represents the scene five scenes, initial scene shows scenario with actors without any actions run. Second scene executes the first round of actions (the example only shows "0" for axis Y):

Scene 1, initial scene, no actions executed, Marco in (0,0) position and RAS1 in (5,0) position

```
[Marco]  .  .  .  .  [RAS1]
```


Scene 2, first round of actions run, for example above, only one action run (Marco uses weapon pointing to east). Assume ">" symbol represents bullet from handgun

```
[Marco]  >  .  .  .  [RAS1]
```

NOTE: action.scenes=99

Since scenario has defined "scenes: 5", then the scenario will run with 5 scenes. Each scene execution happens two things:

* A new round of actions is run for each actor in the scene
* The duration of action.scenes is decreased by 1 and the action result still happening depending on the xScope and yScope of the resulting action executed. When actions.scenes reaches 0, the action's consequences (bullet traveling from weapon shoot) stops from happening in the next scene. Some weapons should have a limit from scenes, for example, shoot a shotgun would not make sense to last more than 1 scene since it's one single shot that covers an area.

In this case, since we have only one action, scenes after scene 2 only runs the "scenes" remaining for the action executed, which is, shoot the handun

Scene 3, bullet travels bulletXPos + xScope

```
[Marco]  .  >  .  .  [RAS1]
```

NOTE: action.scenes=98

Scene 4, bullet travels bulletXPos + xScope

```
[Marco]  .  .  >  .  [RAS1]
```

NOTE: action.scenes=97

Scene 5, bullet travels bulletXPos + xScope

```
[Marco]  .  .  .  >  [RAS1]
```

NOTE: action.scenes=96

Scenario finished! scenes completed

Example 2: Enough scenes so bullet reaches RAS1
POST /scenario

```
{
    "scenes": 6,
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "handgun",
            "power": 1,
            "xScope": 1,
            "yScope": 1,
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
            "xPos": 5,
            "yPos": 0
        }
    }],
    "actions": [{
        "actor": "Marco",
        "use": "weapon",
        "target": "east"
        "scenes": 100
    }]
}
```

Response
```
{
    "code": 202
    "result": {
        "Marco": "alive",
        "RAS1": "death"
    }
}
```

Example 3: Not enough scenes duration for the action, RAS1 survives
POST /scenario

```
{
    "scenes": 5,
    "actors": [{
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "handgun",
            "power": 1,
            "xScope": 1,
            "yScope": 1,
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
            "xPos": 5,
            "yPos": 0
        }
    }],
    "actions": [{
        "actor": "Marco",
        "use": "weapon",
        "target": "east"
        "scenes": 4
    }]
}
```

Response
```
{
    "code": 202
    "result": {
        "Marco": "alive",
        "RAS1": "alive"
    }
}
```

## Nice to have!
This is an optional requirement. Add a graphical user interface (GUI) that shows the execution of an scenario showing each scene. For this user interface, 
it is not expected to have user interaction (receive user input), but only shows the output of running a scenario saved in the database.

Graphics could be simple animations that are updated on each scene. It is a plus if the graphics are sprites from the game.