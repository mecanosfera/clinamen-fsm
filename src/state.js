class State {

  constructor(...args){
    init(args);
  }

  init(args){
    this.name = args[0];
  }

  enter(lastStateName){}

  exit(newStateName){}

  handleInput(){}

  update(args){}

  draw(args){}


}
