var game = new Phaser.Game(1500, 1000, Phaser.AUTO);

// 'state0' is name or key of state & 'demo.state0' is property of demo object.
game.state.add('state0', demo.state0);
//game.state.add('state1', demo.state1);
//game.state.add('state2', demo.state2);

// then start the state it will be start first
game.state.start('state0');