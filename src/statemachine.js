class StateMachine {

  constructor(args){
    init(args);
  }

  init(args){
    this.states = {};
    this.state = "";
    if(args.states){
      this.states = args.states;
      start(args.initialState);
    }

  }

  start(startStateName){
    if(startStateName){
      this.state = this.states[startStateName];
      this.state.enter();
    }
  }

  change(newStateName){
    var lastStateName = state.name;
    this.state.exit(newStateName);
    this.state = this.states[newStateName];
    this.state.enter(lastStateName);
  }

  add(newState){
    this.states[newState.name] = newstate;
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
