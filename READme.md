## Rare Tech Test

**Task:**
I have 8 friends:

Anne,
Brian,
Carol,
Derrick,
Elle,
Fred,
Gail,
Harry

I worry a lot about any of them getting into trouble. I want an application that I can use to search their name that will return the name and phone number for their local police force.
I have found this API which should help: https://data.police.uk/docs/

Where each one lives doesn’t matter and is up to you to decide, though they all live in different areas and this must remain static.

Create an Express.js application that can be used to query their name and return JSON containing the relevant information e.g. 127.0.0.1:3000/anne -> {name: xxxxxx, phone: xxxxxx}

___

**Solution:** For this test I decided to create a simple model with the friends details. From this I was then able to harness req.params.id to query the local database for my friends details and then make a get request to the police API passing in the friends location in order to get the relevant information for each friend.

___
**To use:** Begin by starting the localhost server using script provided in package.json ```yarn start```, then seed your database ```yarn seed```. You can now place api requests to your localhost using ```http://localhost:*port*/friends/*friendsName*```

___
**Wins:** Writing the routes/controllers dynamically so that there was only one function needed for each to return the relevant information.

**Struggles:** I cheated a little in the seeds file where I have not capitalised the friends names in order for them to match the ```req.params.id``` passed through the GET request. If I was to spend more time on it I would consider using ```.splice()``` and ```toUpperCase()``` to capitalise the first letter of the name from the request, thereby allowing the user to use lowercase in the request but still have the friends names capitalised in the database.
