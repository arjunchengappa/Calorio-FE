import { Component } from "react";
import FoodItems from "./components/FoodItems/FoodItems";
import TopFoodItems from "./components/FoodItems/TopFoodItems"
import NewFoodItem from "./components/NewFoodItem/NewFoodItem";
import NavBar from "./components/UI/NavBar";
import UserRegistration from "./components/UserRegistration/UserRegistration";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: JSON.parse(window.localStorage.getItem('user')) || {userEmail: '', userPassword: ''},
      foodItems: [],
      filterDate: new Date().toISOString().slice(0, 10),
      error: ''
    }
    this.filterHandler = this.filterHandler.bind(this);
  }

  fetchItems(filterDate) {
    filterDate = filterDate || this.state.filterDate;
    if (this.state.user.userEmail) {
      fetch(`http://127.0.0.1:5000/diet?filter_date=${filterDate}`, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'X-User-Auth': btoa(`${this.state.user.userEmail}:${this.state.user.userPassword}`)
        }})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState((prevState) => {
                return {...prevState, foodItems: data.user_items}
            })
        });
    }
  }

  addNewItemHandler = (newItem) => {
    fetch('http://127.0.0.1:5000/diet', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'X-User-Auth': btoa(`${this.state.user.userEmail}:${this.state.user.userPassword}`)
      },
      body: JSON.stringify(newItem)
    }).then(response => response.json())
      .then(data => {
        this.setState((prevState) => {
          this.fetchItems();
          return {...prevState, foodItems: [...prevState.foodItems, data.user_item]};
        });
      })
  }

  signInHandler = (user) => {
    fetch('http://127.0.0.1:5000/sign-in', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: user.userFirstName,
        lastName: user.userLastName,
        email: user.userEmail,
        password: user.userPassword
      })})
        .then((response) => {
          if (response.ok){
            return response.json;
          } else {
            return response.text().then(text => {
              throw new Error(text ? text : 'Please try again')
            })
          }
        })
        .then((data) => {
          this.setState((prevState) => {
            window.localStorage.setItem('user', JSON.stringify({
              userEmail: user.userEmail,
              userPassword: user.userPassword
            }));
            return {...prevState, user: JSON.parse(window.localStorage.getItem('user'))};
          });
          this.fetchItems();
        })
        .catch((error) => {
          this.setState((prevState) => {
            return {...prevState, error: error.message};
          })
        })
  }

  logoutHandler = () => {
    this.setState((prevState) => {
      window.localStorage.setItem('user', JSON.stringify({userEmail: '', userPassword: ''}));
      return {...prevState, user: {userEmail: '', userPassword: ''}};
    })
  }

  filterHandler(filterDate) {
    this.setState((prevState) => {
      this.fetchItems(filterDate);
      return {...prevState, filterDate: filterDate}
    });
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} onLogout={this.logoutHandler}></NavBar>
        { this.state.user.userEmail && this.state.user.userPassword ? (
          <div>
            <NewFoodItem onAddFoodItem={this.addNewItemHandler}></NewFoodItem>
            <FoodItems 
              user={this.state.user} 
              foodItems={this.state.foodItems}
              onFilterChange={this.filterHandler}
            ></FoodItems>
          </div>
        ) : (
          <div> 
            <UserRegistration onSignIn={this.signInHandler} error={this.state.error}></UserRegistration>
            <TopFoodItems></TopFoodItems>
          </div>
        )}
        
      </div>
    );
  }
}

export default App;
