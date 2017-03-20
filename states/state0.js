var demo = {}, centerX = 1500/2, centerY = 1000/2, window, lCloudDivider;
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
        game.load.image('tree', '../assets/sprites/tree.png', 127, 176);
        game.load.image('globeTable', '../assets/sprites/globeTable.png', 514, 318);
        game.load.image('teacherPart1', '../assets/sprites/teacherPart1.png', 172, 532);
        game.load.image('teacherHeadHappy', '../assets/sprites/teacherHeadHappy.png', 90, 110);
        game.load.image('teacherHeadAngry', '../assets/sprites/teacherHeadAngry.png', 90, 110);
        game.load.image('handBottomPart', '../assets/sprites/handBottomPart.png', 101, 139);
        game.load.image('handTopPart', '../assets/sprites/handTopPart.png', 87, 61);
        
    },
    create: function(){
                
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var windowSide = game.add.sprite(0, 0, 'windowSide');
        windowSide.anchor.setTo(0.2, 0.1);
        windowSide.scale.setTo(0.8, 1);
        
        var bookStuck = game.add.sprite(455, 350, 'bookStuck');
        bookStuck.scale.setTo(0.7, 0.7);
        
        var clock = game.add.sprite(510, 150, 'clock');
        clock.scale.setTo(0.8, 0.8);
        
        var silenceBoard = game.add.sprite(1060, 390, 'silenceBoard');
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
        
        var lWindowBack = game.add.sprite(50, 280, 'lWindowBack');
        lWindowBack.scale.setTo(0.7, 0.7);
        
        var rWindowBack = game.add.sprite(680, 280, 'rWindowBack');
        rWindowBack.scale.setTo(0.7, 0.7);
        
        var lCloudDivider = game.add.sprite(50, 280, 'cloudDivider');
        lCloudDivider.scale.setTo(0.6, 0.6);
        //lCloudDivider.body.collideWorldBounds = true;
        
        var rCloudDivider = game.add.sprite(680, 280, 'cloudDivider');
        rCloudDivider.scale.setTo(0.6, 0.6);
        
        
        cloudOne = game.add.sprite(120, 360, 'cloudOne');
        cloudOne.scale.setTo(0.8, 0.8);
        cloudTwo = game.add.sprite(280, 360, 'cloudTwo');
        cloudTwo.scale.setTo(0.8, 0.8);
        
        var lWindow = game.add.sprite(30, 280, 'window');
        lWindow.scale.setTo(0.7, 0.7);
        
        var rWindow = game.add.sprite(660, 280, 'window');
        rWindow.scale.setTo(0.7, 0.7);
        
        var tree = game.add.sprite(1040, 700, 'tree');
        tree.scale.setTo(0.7, 0.7);
        
        var globeTable = game.add.sprite(660, 590, 'globeTable');
        globeTable.scale.setTo(0.7, 0.7);
        
        var handTopPart = game.add.sprite(1123, 530, 'handTopPart');
        handTopPart.scale.setTo(0.7, 0.7);
        
        var teacherBodyPart = game.add.sprite(1150, 500, 'teacherPart1');
        teacherBodyPart.scale.setTo(0.7, 0.7);
        
        var teacherHeadHappy = game.add.sprite(1172, 442, 'teacherHeadHappy');
        teacherHeadHappy.scale.setTo(0.7, 0.7);
        
        /*var teacherHeadAngry = game.add.sprite(1172, 442, 'teacherHeadAngry');
        teacherHeadAngry.scale.setTo(0.7, 0.7);*/
        
        
        
        var handBottomPart = game.add.sprite(1065, 475, 'handBottomPart');
        handBottomPart.scale.setTo(0.7, 0.7);
        
        
        
        // Structure End //
        
        
        
        
        
        
        game.physics.enable([cloudOne, lCloudDivider]); // enble physics to array
        cloudOne.body.gravity.x = -200; // give it gravity in vertical position
        cloudOne.body.bounce.x = 0.3; // when ch1 hit the ground it bounce 0.3sec        
        cloudOne.body.collideWorldBounds = true; // collideWorldBounds for fixed in window
        
        
        
        
                        
        game.add.tween(cloudOne).to({alpha: 0, x:  1, }, 9000, 'Linear', true); // for loop forever
        //game.add.tween(cloudTwo).to({alpha: 0, x: 1, }, 9000, 'Linear', true); // for loop forever
        
        
    },
    update: function(){
        game.physics.arcade.collide(cloudOne, lCloudDivider); // ch1 collide in two properties when they hit together         
    }
};