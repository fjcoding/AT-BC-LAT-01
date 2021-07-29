# Metal Slug Maker

Have you ever played [Super Mario Maker](https://supermariomaker.nintendo.com/)? well, this is something similar, but instead of Super Mario Bros, we will build Metal Slug scenarios. More info about the game? check [Wikipedia](https://en.wikipedia.org/wiki/Metal_Slug)

## User Stories

### User story one: Can you build a metal slug scenario analyzer?

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

## Project pre-requisites

-   NodeJS (Latest stable)
-   Git (Latest stable)
-   Text Editor or IDE

## Project setup

Every time there are changes to `package.json` file run command below for installing/updating any project dependency

```
npm install
```

## Run tests

Run tests for Katas (/katas)

```
npm run test:katas
```

Run tests for main project (/src)

```
npm test
```

## Run the server

Run the server on the development mode

```
npm run dev
```

Run the server on deployment mode

```
node src/main/server.js
```

## Dependencies

## Development process

1. Create branch with the following format for the name: \<your name\>/\<kata or feature name being implemented\>
2. Commit changes in the branch created. For each commit created, make sure to add a meaningful commit message that describes the group of changes being committed. Limit=70 chars
3. Push branch to origin repository (Github). NOTE: Never push to "main" branch
4. Create a pull request (PR) in GitHub that points from your pushed branch to the target branch specified for the kata or feature development
5. Add reviewers and wait for review comments. Once PR is approved, it can be merged to target branch
6. After PR is merged, remove your branch from origin

## Code review

As authors, make sure that PRs have the following:

-   PR Title: Brief summary of changes being delivered by the PR. This should help reviewers to understand what is the goal of the changes
-   PR Description (Optional): If Title is not enough, use PR description to add details about changes being delivered in the PR.
-   A moderate number of changes. Goals for PRs should be kept as small as possible, so it's easier for reviewers to understand and reduce chances to introduce bugs hard to catch

As reviewers, a PR should be only approved if following conditions are met (In order of priority):

1. All checks pass (tests passing, no lint errors, code coverage >= 75%)
2. Changes accomplish the goal defined for the PR (Should make sense with the title)
3. Changes are covered by tests (There could be few exceptions)

## Git commands cheatsheet
- git clone \<repo url\>
- git config
- git status
- git branch \<branch name\>
- git checkout \<branch name\>
- git add \<file or folder\>
- git commit -m \<meaningful commit message\>
- git push
- git pull

## Database connection
1. Run the npm install
2. configure the service account (in first iterations we will use a default credetial)

## querys examples
1. set query (if you don't specify an ID, firebase will create one automatically):
db.collection("Cities").doc("ID").set({
name: "Los Angeles",
state: "CA",
country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

2. set query in an existent file:
var cityRef = db.collection('cities').doc('ID');

var setWithMerge = cityRef.set({
    capital: true
}, { merge: true });

If you wanna overwrite the existent file just put false in the merge setting.

3. update a query:
const cityRef = db.collection('cities').doc('ID');

// Set the 'capital' field of the city
const res = await cityRef.update({capital: true});

Also you can update an object component like this:
const initialData = {
  name: 'Frank',
  age: 12,
  favorites: {
    food: 'Pizza',
    color: 'Blue',
    subject: 'recess'
  }
};

// ...
const res = await db.collection('users').doc('Frank').update({
  age: 13,
  'favorites.color': 'Red'
});

4. arrayUnion() and arrayRemove() into query:
const admin = require('firebase-admin');
// ...
const washingtonRef = db.collection('cities').doc('DC');

// Atomically add a new region to the "regions" array field.
const unionRes = await washingtonRef.update({
  regions: admin.firestore.FieldValue.arrayUnion('greater_virginia')
});
// Atomically remove a region from the "regions" array field.
const removeRes = await washingtonRef.update({
  regions: admin.firestore.FieldValue.arrayRemove('east_coast')
});

// To add or remove multiple items, pass multiple arguments to arrayUnion/arrayRemove
const multipleUnionRes = await washingtonRef.update({
  regions: admin.firestore.FieldValue.arrayUnion('south_carolina', 'texas')
  // Alternatively, you can use spread operator in ES6 syntax
  // const newRegions = ['south_carolina', 'texas']
  // regions: admin.firestore.FieldValue.arrayUnion(...newRegions)
});

5. delete a query:
const res = await db.collection('cities').doc('ID').delete();

6. get a query:
const cityRef = db.collection('cities').doc('ID');
const doc = await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}
