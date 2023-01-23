import React, { Component } from "react";
import "./App.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

import Logo from "./logo.svg";
import image from "./Meet-Up.png";

import WelcomeScreen from "./WelcomeScreen";
//import { checkToken } from "./api";
import { getEvents, extractLocations, getAccessToken } from "./api";

import { OfflineAlert } from "./Alert";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: "all",
    showWelcomeScreen: undefined,
  };
  // THIS IS FROM THE CF DOCUMENTATION. It does not work.
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
  //THIS WORKS
  async componentDidMount() {
    this.mounted = true;
    // const accessToken = localStorage.getItem("access_token"); // These 3 lines are from CF documentation but they work when added
    //  const searchParams = new URLSearchParams(window.location.search); // These 3 lines are from CF documentation but they work when added
    // const code = searchParams.get("code"); // These 3 lines are from CF documentation but they work when added
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
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
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
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
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
