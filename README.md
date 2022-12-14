# Meet_Up

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## Key Features:

- Filter events by city.<br>
- Show/hide event details.<br>
- Specify number of events.<br>
- Use the app when offline.<br>
- Add an app shortcut to the home screen.<br>
- View a chart showing the number of upcoming events by city.<br>

## Feature Scenarios:

### FEATURE 1: FILTER EVENTS BY CITY

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. --- Given: the user is logged in --- When: the page first loads --- Then: display all events from all cities

Scenario 2: User should see a list of suggestions when they search for a city. --- Given: the user has started typing in the search-bar --- When: "keyup" --- Then: suggestion results populate

Scenario 3: User can select a city from the suggested list. --- Given: there are suggestions visible --- When: the user clicks on a city --- Then: the selected city's event page opens

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default --- Given: an event element is visible. --- When: the event element hasn’t been clicked yet --- Then: the event element is collapsed.

### FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number --- Given: “number of events” is visible --- When: the user hasn’t specified a number --- Then: the number is 32

Scenario 2: User can change the number of events they want to see --- Given: “number of events” is visible --- When: the user specifies a number (integer) --- Then: the number becomes the user’s input number.

### FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection --- Given: there is cached data --- When: there is no internet connection --- Then: the cached data still displays

Scenario 2: Show error when user changes the settings (city, time range) --- Given: The user changes the city or time range --- When: There are no events that meet those criteria --- Then: An error message displays “No Results” or similar

### FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city --- Given: A user is viewing a city --- When: the user clicks on “data visualization” or similar --- Then: a page with graphs of event information/metrics is displayed

## User Stories:

- As a [user], I should be able to: [show/hide an event’s details] So that: I can view relevant information without seeing unneeded information. <br>

- As a [user], I should be able to: [specify the number of events to view] So that: I am not overloaded with events on one page or constantly need to click “next page”. <br>

- As a [user], I should be able to: [use the app offline] So that: I can use the app as intended even if there are network issues. <br>

- As a [user], I should be able to: [visualize all of the data for a particular city] So that: I can see all the information for the events of my city at once. <br>

## Technical Requirements:

- The app must be a React application.<br>
- The app must be built using the TDD technique.<br>
- The app must use the Google Calendar API and OAuth2 authentication flow.<br>
- The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.<br>
- The app’s code must be hosted in a Git repository on GitHub.<br>
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
  as on IE11.<br>
- The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
  and 320px.<br>
- The app must pass Lighthouse’s PWA checklist.<br>
- The app must work offline or in slow network conditions with the help of a service worker.<br>
- Users may be able to install the app on desktop and add the app to their home screen on
  mobile.<br>
- The app must be deployed on GitHub Pages.<br>
- The API call must use React axios and async/await.<br>
- The app must implement an alert system using an OOP approach to show information to the
  user.<br>
- The app must make use of data visualization (recharts preferred).<br>
- The app must be covered by tests with a coverage rate >= 90%.<br>
- The app must be monitored using an online monitoring tool.<br>
