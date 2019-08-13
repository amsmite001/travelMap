# Introduction

This is a prototype for a project with the goal of tracking the locations of employees in a company. This is meant to be a lightweight app with the goal of adding minimal overhead and hassle. In doing so, employees will not feel over-burdened to use the app.

All are welcome to work on this repository, but credit must be given where due.


## Installiation

To run this application, either
1. Download the repository via the interface
2. `git clone [repo]`

## To-Do

As this is a prototype, most of the styling is done, with comments as to where to add database hooks. The following needs to be added in, and can possibly be major code changes:

* Add in user management via Okta
    * Need Username, home office and supervisor (with special exception for some C level executives)
* Create a backend
    * Need a table for `Trips` that tracks `startDate`, `endDate`, `destination`, and `status` (does the manager know that the employee is going on this trip, signaled by a notification)
    * Need queries to populate table on home page with 3 most upcoming trips, and 3 most recently completed trips.
    * Need to query against all users traveling to populate chart on `loc.html` with all users traveling for a specified office
* Add search functionality to lookup employees in the db

## Skills

Angular