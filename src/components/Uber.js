import React, { Component } from 'react';

import uberStudy from './../uberStudy';

class Uber extends Component {
  constructor(props) {
    super(props);
  }

  renderGoals = () => {
    const { research: { goals } } = uberStudy;
    return (
      <ul>
        {goals.map((goal, index) => <li key={index}>{goal}</li> )}
      </ul>
    );
  };

  renderFindings = () => {
    const { research: { findings: { statistics } } } = uberStudy;
    return (
      <ul>
        {statistics.map((stat, index) => <li key={index}>{stat}</li>)}
      </ul>
    );
  };

  renderPersonas = () => {
    const { research: { personas } } = uberStudy;
    // TODO: render the images
    return (
      <ul>
        {personas.map((person, index) => <li key={index}>{person}</li>)}
      </ul>
    );
  };

  renderTasks = () => {
    const tasks = uberStudy.paperPrototypes.userTesting.tasks;
    return (
      <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    );
  };

  render () {
    return (
      <div style={s.root}>
        <h1>Uber Case Study</h1>
        <div>
          <h2>Overview</h2>
          <p>{uberStudy.overview}</p>
        </div>
        <div>
          <h2>Background</h2>
          <div>
            <h3>Objective</h3>
            <p>{uberStudy.background.objective}</p>
            <h3>Target User</h3>
            <p>{uberStudy.background.targetUser}</p>
            <h3>Prevalence</h3>
            <p>{uberStudy.background.prevalence}</p>
          </div>
        </div>
        <div>
          <h2>Research Methods and Findings</h2>
          <div>
            <h3>Goals</h3>
            {this.renderGoals()}
            <h3>Methods</h3>
            <p>{uberStudy.research.methods}</p>
            <h3>Findings</h3>
            {this.renderFindings()}
          </div>
        </div>
        <div>
          <h2>Personas</h2>
          {this.renderPersonas()}
        </div>
        <div>
          <h2>Competitive Analysis</h2>
          <p>{uberStudy.competitiveAnalysis}</p>
        </div>
        <div>
          <h2>UX Flows</h2>
          <p>{uberStudy.UXFlows.overview}</p>
          <div>
            <h3>UX Flow 1</h3>
            <p>{uberStudy.UXFlows.one.description}</p>
          </div>
          <div>
            <h3>UX Flow 2</h3>
            <p>{uberStudy.UXFlows.two.description}</p>
          </div>
        </div>
        <div>
          <h2>UI Sketches</h2>
          <p>{uberStudy.UISketches.overview}</p>
        </div>
        <div>
          <h2>Paper Prototypes</h2>
          <div>
            <p>{uberStudy.paperPrototypes.overview}</p>
            <div>
              <h3>Prototype 1</h3>
              <p>{uberStudy.paperPrototypes.one.description}</p>
            </div>
            <div>
              <h3>Prototype 2</h3>
              <p>{uberStudy.paperPrototypes.two.description}</p>
            </div>
            <div>
              <h3>User Testing</h3>
              <h4>Participants</h4>
              <p>{uberStudy.paperPrototypes.userTesting.participants}</p>
              <h4>Tasks</h4>
              {this.renderTasks()}
              <h4>Results</h4>
              <p>{uberStudy.paperPrototypes.userTesting.results}</p>
              <h4>Point of View and Next Steps</h4>
              <p>{uberStudy.paperPrototypes.userTesting.pov.next}</p>
              <p>
                Based off of our user testing results we were glad to see that people felt that this feature would actually improve the experience for many other users on the platform. We received a lot of confirmation on good ideas we had, but also saw how we had a lot of holes in the design. We feel like we were much too focused on communication via voice but failed to realize that riders have a preference for texting, especially if they have a language barrier. We think that although we had solid ideas for both prototypes, they were missing a bit from each other that would have refined them more.
                <br /> <br />
                We think that we could have improved our design process a bit by having a structured user journey diagram where we would document each stage of the process. From there we would also be able to hone in on specific pain points and how/where we can resolve them. We also think that having a problem statement that focuses on our target user would have been more helpful.
                We initially didn’t want to allow users of the feature to type their messages, but we have to consider that riders have the affordance to type, whereas the driver doesn’t. So we want to add text message capabilities for the rider. But the driver still just uses voice.
                <br /> <br />
                We want to make the feature more apparent so the user knows definitively which button they need to interact with to solve their problem.
                <br /> <br />
                For future iterations we feel that we will be combining our two prototypes into a more refined singular design. They both had a lot of potential and many users actually wished that certain features in one design were in the other one. We also need to focus more on the rider experience and fully understand what that is like. For one, we need to ensure that riders have an option for a text response rather than a voice chat. On top of that, we need to show more signals to a user that what they are going to say are actually going to be translated on the other person’s phone. We only realized this once we brought in actual international students who could give us accounts of their own experience. We think also considering a better way of presenting these messages should be considered because having constant pop ups during a conversation would be a bit annoying. We would also want to keep the map view for the ride still on screen since that is primary to Uber’s functionality. We believe that these decisions strongly reflect the results we found and hope to resolve them through editing the UI and empathizing with the user better.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Hi-Fi Prototypes</h2>
          <p>{uberStudy.hifiPrototypes}</p>
        </div>
        <div>
          <h2>Refining Hi-Fi Prototypes</h2>
          <p>{uberStudy.refiningPrototypes}</p>
        </div>
        <div>
          <h2>Reflection</h2>
          <p>{uberStudy.reflection}</p>
        </div>
      </div>
    );
  }
}

const s = {
  root: {
    margin: "0 15%"
  }
};

export default Uber;