# Vanhack Calendar Page
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

*This is was a submission to [Vanhack](https://www.vanhack.com) for vanhackathon 2019*
see [The Charter](#the-charter) for the details of the challenge.

[click here](https://vanhack-calendar-b86f3.firebaseapp.com) to view a working
demo.

##  Overview
### Running the solution
You do not actually need to install the app to view it. Just [click here](https://vanhack-calendar-b86f3.firebaseapp.com) to view a working demo. You can login using any one of the following roles:

- Regular Candidate

    username: john@example.com

    password: john

- Premium Candidate

    username: martha@workplace.com

    password: martha

- Vanhack Staff

    username: tiago@vanhack.com

    password: tiago

If you would still like to run the solution on your computer then see [Install and run](#install-and-run) below.

### Install and run

Clone the repository
```
$ git clone git@github.com:Aomitayo/vanhack-calendar-app.git aomitayo-vanhackathon2019-submission
```

Change to the working directory and install dependencies
```
$ cd aomitayo-vanhackathon2019-submission && npm install
```
Run the app
```
$ npm run serve
```

Open your web browser and navigate to http://localhost:3000

## Design Architecture and completion status

### Frontend App
A lightweight [React.js]() app.
*No redux, not component library just react & [tailwindcss](https://tailwindcss.com/)*

The key idea for the solution is to provide:

1. Improved presentation of event cards, with adequate highlighting of event
   types (Leap, Vanhackathon, premium only)
2. Navigation controls for present, past and future events on vanhacks calender
3. Affordances for context-sensitive (event and user) actions including
  - Apply - for events that require an application
  - Attend - for registered vanhackers to signify their intention to
      participate - interview practice for instance
  - Join - For attendees to go straight to a zoom meeting where applicable
  - Join vanhack premium - for non-premium users to join vanhack premium

#### Frontend status

### Backend API

The backend api was intended as a serverless microservice to be hosted on the
[firebase platform]() using an [Express.js]() app implemented as a cloud function.

#### Backend status

Time constraints did not allow for much progress on this aspect, so most of the
functionality is still implemented in the front end.

However, the skeleton for the backend can be found in the [functions](functions/)
sub-directory of this repository. The preliminary API specifications written in
[ApiBlueprint] syntax can be found [here](functions/api-spec.apib).

The ApiBluePrint syntax and [Dredd] have also been setup as the test system for
the api. See [events.apib](functions/tests/events.apib) and
[hooks.js](functions/hooks.js) for some insight.

Appropriate next steps will be to complete the implementation and the automated
tests.

## Some Implementation Details

## The Charter

### Why
VanHack needs a better way to display to candidates the events (both online and presential) happening at VanHack. You can check our current event’s page [here](https://vanhack.com/platform/#/events). Events may include webinars (Premium and non-Premium), Leaps, Recruiting missions, Q&A Sessions, VanHackathons, Meetups and others.


### What
Create a solution to display upcoming and past events/activities. Candidates should be able to confirm their participation in an event using this feature (no need to confirm their participation elsewhere).

Since we have many different events happening monthly, we would like this page to be clean and user-friendly (nowadays, we are afraid it would get too crowded if we decided to add everything there).

We would like for hiring events (Leaps, VanHackathons, Missions) to stand out to candidates the most.

We would like the webinars that are exclusive for Premium members to be distinguished from the “open for all” webinars. Non-Premium members should see a friendly error warning when trying to apply for a Premium-only webinar, with a CTA for the candidate to read more about Premium/buy a membership plan.

### Recommendations:
The VanHack stack is C# + React, but you’re free to use any language to accomplish this task

You can check the VanHack Style Guide here:
https://invis.io/WZT8QO09Y2R#/373544038_VH_-_Style_Guide

### Deliverables
There are many different ways to complete this task. It could be a Relational Database Diagram to represent the principal entities to be used in this solution, a visual mockup/wireframe, a detailed document with technical specification or a real implementation of an MVP using some programming language. Do what you are capable of with your skills and background!

