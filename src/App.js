import React, { Component } from "react";
import styled from "styled-components";

export class App extends Component {
  state = {
    on: true
  };

  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <StyledWrapper>
        <SectionWrapper>
          {this.state.on ? (
            <StyledContent>Yo</StyledContent>
          ) : (
            <StyledContent>NO</StyledContent>
          )}
          <StyledButton onClick={this.toggle}>
            Regular Class Based State in Parent
          </StyledButton>
        </SectionWrapper>
        <ToggleOne>Yo</ToggleOne>
        <ToggleTwo>
          {({ on, toggle }) => {
            return (
              <SectionWrapper>
                {on ? (
                  <StyledContent>It's awn!</StyledContent>
                ) : (
                  <StyledContent>Not anymore tho...</StyledContent>
                )}
                <StyledButton onClick={toggle}>RENDER PROP BABY</StyledButton>
              </SectionWrapper>
            );
          }}
        </ToggleTwo>
      </StyledWrapper>
    );
  }
}

export class ToggleOne extends Component {
  state = {
    on: true
  };

  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return (
      <SectionWrapper>
        {this.state.on ? (
          <StyledContent>Yo</StyledContent>
        ) : (
          <StyledContent>NO</StyledContent>
        )}
        <StyledButton onClick={this.toggle}>State in Child</StyledButton>
      </SectionWrapper>
    );
  }
}

export class ToggleTwo extends Component {
  state = {
    on: true
  };

  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default App;

const StyledContent = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  min-height: 50px;
  min-width: 200px;
  font-size: 20px;
  margin-top: 20px;
  background: aquamarine;
  border: solid black 1px;
  color: darkorchid;
  font-weight: bold;
  box-shadow: 2px 2px 2px grey;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    background: hotpink;
  }
  :focus {
    outline: 0;
  }
`;

const SectionWrapper = styled.div`
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;
