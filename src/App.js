import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { clickButton, newValue } = this.props;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Teste de React com Redux
        </p>
        <input type='text' onChange={this.inputChange} value={this.state.inputValue} />
        <button onClick={() => clickButton(this.state.inputValue)}>Click me!</button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (App);
