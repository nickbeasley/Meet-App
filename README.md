# Meet App

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## The W's

- Who—The users of your Meet application. They could be you, your friends, your professional network, or your potential employers.<br>
- What—A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique.<br>
- When—Users of this app will be able to use it whenever they want to view upcoming events for a specific city. Your recruiter will be able to see your code immediately on GitHub.<br>
- Where—The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). The application itself is also hosted online to make it shareable and installable. It can be used even when the user is offline. As it’s responsive, it displays well on any device.<br>
- Why—Serverless is the next generation of cloud infrastructure, PWA provides great user experience and performance, and the TDD technique ensures you have quality code and adequate test coverage. All of these skills, together with data visualization, will distinguish you from other web developers.<br>

## Key Features:

- Filter events by city.<br>
- Show/hide event details.<br>
- Specify number of events.<br>
- Use the app when offline.<br>
- Add an app shortcut to the home screen.<br>
- View a chart showing the number of upcoming events by city.<br>

## Feature Scenarios:

### FEATURE 1: FILTER EVENTS BY CITY

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. <br>

- Given: The user is logged in <br>
- When: The page first loads <br>
- Then: Display all events from all cities<br>

Scenario 2: User should see a list of suggestions when they search for a city. <br>

- Given: The user has started typing in the search-bar <br>
- When: "keyup" <br>
- Then: Suggestion results populate<br>

Scenario 3: User can select a city from the suggested list. <br>

- Given: There are suggestions visible <br>
- When: The user clicks on a city <br>
- Then: The selected city's event page opens<br>

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default <br>

- Given: An event element is visible. <br>
- When: The event element hasn’t been clicked yet <br>
- Then: The event element is collapsed.<br>

Scenario 2: User can expand an event to see its details <br>

- Given: An event element is visible. <br>
- When: The event element is clicked. <br>
- Then: The event element is expanded.<br>

Scenario 3: User can collapse an event to hide its details <br>

- Given: The event element is expanded. <br>
- When: The user clicks it. <br>
- Then: The element is collapsed.<br>

### FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number <br>

- Given: “number of events” is visible <br>
- When: The user hasn’t specified a number <br>
- Then: The number is 32<br>

Scenario 2: User can change the number of events they want to see <br>

- Given: “number of events” is visible <br>
- When: The user specifies a number (integer) <br>
- Then: The number becomes the user’s input number.<br>

### FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection <br>

- Given: There is cached data <br>
- When: There is no internet connection <br>
- Then: The cached data still displays<br>

Scenario 2: Show error when user changes the settings (city, time range) <br>

- Given: The user changes the city or time range <br>
- When: There are no events that meet those criteria <br>
- Then: An error message displays “No Results” or similar<br>

### FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city <br>

- Given: A user is viewing a city <br>
- When: The user clicks on “data visualization” or similar <br>
- Then: A page with graphs of event information/metrics is displayed<br>

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
