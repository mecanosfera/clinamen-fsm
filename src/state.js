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
