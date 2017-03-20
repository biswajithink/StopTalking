var demo = {}, centerX = 1500/2, centerY = 1000/2, window, cloudDivider, leftCloud, cloudOne, lWindowBack, velocity = 500, nextFire = 0, fireRate = 200, lCloudDivider;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('windowSide', '../assets/sprites/windowSide.jpg', 1966, 892);
        game.load.image('floor', '../assets/sprites/floor.png', 2400, 320);
        game.load.image('boardSide', '../assets/sprites/boardSide.png', 432, 1106);
        game.load.image('board', '../assets/sprites/board.png', 335, 725);
        game.load.image('lWindowBack', '../assets/sprites/lWindowCloud.jpg', 515, 378);
        game.load.image('rWindowBack', '../assets/sprites/rWindowCloud.jpg', 515, 378);
        game.load.image('cloudDivider', '../assets/sprites/cloudDivider.jpg', 2, 424);
        game.load.image('cloudOne', '../assets/sprites/cloudOne.png', 62, 45);
        game.load.image('cloudTwo', '../assets/sprites/cloudTwo.png', 147, 107);
        game.load.image('window', '../assets/sprites/lWindow.png', 576, 424);
        game.load.image('bookStuck', '../assets/sprites/bookStuck.png', 277, 247);
        game.load.image('clock', '../assets/sprites/clock.png', 121, 121);
        game.load.image('silenceBoard', '../assets/sprites/silenceBoard.jpg', 169, 42);
        
    },
    create: function(){
                
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var windowSide = game.add.sprite(0, 0, 'windowSide');
        windowSide.anchor.setTo(0.2, 0.1);
        windowSide.scale.setTo(0.8, 1);
        
        var bookStuck = game.add.sprite(455, 300, 'bookStuck');
        bookStuck.scale.setTo(0.7, 0.7);
        
        var clock = game.add.sprite(510, 100, 'clock');
        clock.scale.setTo(0.8, 0.8);
        
        var silenceBoard = game.add.sprite(1060, 340, 'silenceBoard');
        silenceBoard.scale.setTo(0.7, 0.7);
        
        var boardSide = game.add.sprite(1500, 0, 'boardSide');
        boardSide.anchor.setTo(1, 0);
        boardSide.scale.setTo(0.7, 0.9);
        
        var floor = game.add.sprite(1500, 800, 'floor');
        floor.anchor.setTo(1, 0);
        floor.scale.setTo(0.7, 0.7);        
        
        
        var board = game.add.sprite(1400, 0, 'board');
        board.anchor.setTo(0.6, -0.2);
        board.scale.setTo(0.8, 0.9);        
        
        
        var lWindowBack = game.add.sprite(50, 230, 'lWindowBack');
        lWindowBack.scale.setTo(0.7, 0.7);
        
        var rWindowBack = game.add.sprite(680, 230, 'rWindowBack');
        rWindowBack.scale.setTo(0.7, 0.7);
        
        /*var lWindow = game.add.sprite(30, 230, 'window');
        lWindow.scale.setTo(0.7, 0.7);
        
        var rWindow = game.add.sprite(660, 230, 'window');
        rWindow.scale.setTo(0.7, 0.7);*/
        
        // Structure End //
        
        var lCloudDivider = game.add.sprite(50, 230, 'cloudDivider');
        lCloudDivider.scale.setTo(0.6, 0.6);
        game.physics.enable(lCloudDivider);
        var rCloudDivider = game.add.sprite(680, 230, 'cloudDivider');
        rCloudDivider.scale.setTo(0.6, 0.6);
        
        
        //leftCloud = game.add.sprite(120, 260, 'cloudOne');
        //cloudOne.scale.setTo(0.8, 0.8);
        
        
        
        leftCloud = game.add.group(); // group for use many sprites
        leftCloud.enableBody = true;
        leftCloud.physicsBodyType = Phaser.Physics.ARCADE;
        leftCloud.createMultiple(50, 'cloudOne'); // number of shoot, key of sprites
        leftCloud.setAll('checkWorldBounds', true); // every sprites set to checkWorldBounds property then fire more than createMultiple number
        leftCloud.setAll('outOfBoundsKill', true); // every sprites kill to outOfBoundsKill property
        leftCloud.setAll('anchor.x', -5.5);
        leftCloud.setAll('anchor.y', -6);
        leftCloud.setAll('scale.x', 1);
        leftCloud.setAll('scale.y', 1);        
        
        /*cloudTwo = game.add.sprite(280, 260, 'cloudTwo');
        cloudTwo.scale.setTo(0.8, 0.8);*/
        
        
                        
        //game.add.tween(cloudOne).to({alpha: 0, x: 1, }, 9000, 'Linear', true); // for loop forever
        //game.add.tween(cloudTwo).to({alpha: 0, x: 1, }, 9000, 'Linear', true); // for loop forever
        
        
    },
    update: function(){
        
            this.fire();
        
        // how to remove a sprites, when one is overright other
        game.physics.arcade.overlap(leftCloud, lCloudDivider, this.hitEnemy);
    },  
    fire: function(){
        if (game.time.now > nextFire){
            nextFire = game.time.now + fireRate; // game.time.now = how many time's the game is running
            console.log('firing');
            cloudOne = leftCloud.getFirstDead(); // bullet fire
            cloudOne.reset(leftCloud.x, leftCloud.y); // position of bullet to reset when fired
            
            //game.add.tween(cloudOne).to({alpha: 0, x: 1, }, 9000, 'Linear', true);
            
            game.physics.arcade.moveToPointer(cloudOne, velocity); // follow the barrel with angleToPointer is moveToPonter, velocity is time to fire
            
        }   
    },
    hitEnemy: function(){
        console.log("hit");
        //lCloudDivider.kill();
        //leftCloud.kill();
    }
};