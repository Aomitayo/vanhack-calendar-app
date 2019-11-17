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
- Premium Candidate
- Vanhack Staff

If you would still like to run the solution then see [Install and run](#install-and-run) below.

### Install and run

## Design and Architecture

### Frontend App
A lightweight [React.js]() app

### Backend API
The backend api was implemented as a serverless [Express.js]() app/microservice
hosted on [firebase]() using cloud functions

You an view the API specifications and tests  [here](functions/api-spec.apib)

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

