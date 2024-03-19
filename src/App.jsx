import "./App.css";
import Header from "./components/Header";
import user from "./components/Data/user.json";
import { Component } from "react";
import { Filter } from "./components/Filter";
import Team from "./components/Team";

class App extends Component {
  state = {
    teamMates: user,
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  getVisibleFilter = () => {
    const { filter, teamMates } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return teamMates.filter(({ username }) =>
      username.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getVisibleFilter();
    return (
      <>
        <Header />
        <Filter value={filter} onChange={this.changeFilter} />
        <Team user={this.teamMates} teamMates={filteredContacts} />
      </>
    );
  }
}

export default App;
