import React from "react";

const Answer = () => {
  return (
    <div className="answer">
      <div className="answer1">
        <div class="card">
          <h5 class="card-header">What is Contex API ?</h5>
          <div class="card-body">
            <h5 class="card-title">Answer of this question :</h5>
            <p class="card-text">
              The Context API is a React structure that enables us to exchange
              unique details and assists in solving prop-drilling from all
              levels of our application. The Context API can be used to share
              data with multiple components, without having to pass data through
              props manually. Context is also touted as an easier, lighter
              approach to state management using Redux. React.createContext() is
              all we need. It returns a consumer and a provider. Provider is a
              component that as it's names suggests provides the state to its
              children. It will hold the "store" and be the parent of all the
              components that might need that store. Consumer as it so happens
              is a component that consumes and uses the state.
            </p>
          </div>
        </div>
      </div>
      <div className="answer2">
        <div class="card">
          <h5 class="card-header">What is Symantic tag ?</h5>
          <div class="card-body">
            <h5 class="card-title">Answer of this question :</h5>
            <p class="card-text">
              Semantic HTML elements are those that clearly describe their
              meaning in a human- and machine-readable way.Semantic elements
              accurately describe the purpose of the element and the type of
              content that is inside them. It is much easier to read.This is
              probably the first thing you will notice when looking at the first
              block of code using semantic elements.It has greater
              accessibility. You are not the only one that finds semantic
              elements easier to understand.Search engines and assistive
              technologies are also able to better understand the context and
              content of your website, meaning a better experience for your
              users.
            </p>
          </div>
        </div>
      </div>
      <div className="answer3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Inline</th>
              <th scope="col">Block</th>
              <th scope="col">Inline-Block</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Answer;
