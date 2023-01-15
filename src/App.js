import React, { Component } from "react";
import "./App.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

import Logo from "./logo.svg";
import image from "./Meet-Up.png";

import WelcomeScreen from "./WelcomeScreen";

// import { checkToken } from "./api";
import { getEvents, extractLocations, getAccessToken } from "./api";

import { OfflineAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: "all",
    showWelcomeScreen: undefined,
  };

  // async componentDidMount() {
  //   this.mounted = true;
  //   const accessToken = localStorage.getItem("access_token");
  //   const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const code = searchParams.get("code");
  //   this.setState({ showWelcomeScreen: !(code || isTokenValid) });
  //   if ((code || isTokenValid) && this.mounted) {
  //     getEvents().then((events) => {
  //       if (this.mounted) {
  //         this.setState({ events, locations: extractLocations(events) });
  //       }
  //     });
  //   }
  // }
  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const { numberOfEvents } = this.state;
    if (location === undefined) location = this.state.selectedLocation;
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      eventCount = eventCount === undefined ? numberOfEvents : eventCount;
      this.setState({
        events: locationEvents.slice(0, eventCount),
        selectedLocation: location,
        numberOfEvents: eventCount,
      });
    });
  };
  updateNumberOfEvents = (number) => {
    this.updateEvents(undefined, number);
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return (
        <div className="App">
          <h1>Meet Up</h1>
          <img src={Logo} alt="My Logo" className="logo" />
          <img src={image} alt="logo" className="logo-two" />

          <div className="OfflineAlert">
            {!navigator.onLine && (
              <OfflineAlert
                text={
                  "You are currently offline. The list of events may not be up-to-date."
                }
              />
            )}
          </div>
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
          <EventList events={this.state.events} />
          <WelcomeScreen
            showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => {
              getAccessToken();
            }}
          />
        </div>
      );
  }
}

export default App;
