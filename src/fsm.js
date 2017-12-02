class StateMachine {

  constructor(args){
    this.init(args);
  }

  init(args){
    this.states = {};
    this.state = null;
    if(args && args.states){
      this.states = args.states;
      if(args.initialState){
        start(args.initialState);
      }
    }

  }

  start(startStateName){
    if(startStateName){
      this.state = this.states[startStateName];
      this.state.enter();
    }
  }

  change(newStateName){
    var lastStateName = null;
    if(this.state){
      lastStateName = this.state.name;
      this.state.exit(newStateName);
    }
    this.state = this.states[newStateName];
    this.state.enter(lastStateName);
  }

  add(newState){
    this.states[newState.name] = newState;
  }

  update(args){
    if(this.state){
      this.state.update(args);
    }
  }

  draw(args){
    if(this.state){
      this.state.draw(args);
    }
  }

}

class State {

  constructor(...args){
    this.init(args);
  }

  init(args){}

  enter(lastStateName){}

  exit(newStateName){}

  handleInput(){}

  update(args){}

  draw(args){}


}

module.exports = {
  "StateMachine"  : StateMachine,
  "State"         : State
}
