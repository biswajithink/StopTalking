var demo = {}, centerX = 1500/2, centerY = 1000/2, window, cloudTwo, cloudOne, cloudthree;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('windowSide', '../assets/sprites/windowSide.png', 1966, 892);
        game.load.image('floor', '../assets/sprites/floor.png', 2400, 320);
        game.load.image('boardSide', '../assets/sprites/boardSide.png', 432, 1106);
        game.load.image('board', '../assets/sprites/board.png', 335, 725);
        game.load.image('lWindowBack', '../assets/sprites/lWindowCloud.jpg', 515, 378);
        game.load.image('rWindowBack', '../assets/sprites/rWindowCloud.jpg', 515, 378);
        game.load.image('cloudDivider', '../assets/sprites/cloudDivider.jpg', 2, 424);
        game.load.image('cloudOne', '../assets/sprites/cloudOne.png', 62, 45);
        game.load.image('cloudTwo', '../assets/sprites/cloudTwo.png', 147, 107);
        game.load.image('cloudThree', '../assets/sprites/cloudThree.png', 83, 63);
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
        
        
        var lWindowBack = game.add.sprite(50, 180, 'lWindowBack');
        lWindowBack.scale.setTo(1.1, 1.1);
        
        var rWindowBack = game.add.sprite(720, 180, 'rWindowBack');
        rWindowBack.scale.setTo(1.1, 1.1);
        
        cloudOne = game.add.sprite(1500, 280, 'cloudOne');
        cloudOne.scale.setTo(0.8, 0.8);
        
        cloudTwo = game.add.sprite(1900, 300, 'cloudTwo');
        cloudTwo.scale.setTo(0.8, 0.8);
        
        cloudThree = game.add.sprite(4500, 280, 'cloudOne');
        cloudThree.scale.setTo(0.8, 0.8);        
        
        cloudFour = game.add.sprite(5200, 320, 'cloudThree');
        cloudFour.scale.setTo(0.8, 0.8);
        
        cloudFive = game.add.sprite(6500, 250, 'cloudTwo');
        cloudFive.scale.setTo(0.2, 0.2);
        
        
        
        var windowSide = game.add.sprite(0, 0, 'windowSide');
        //windowSide.anchor.setTo(0.1, -0.1);
        windowSide.scale.setTo(0.64, 0.9);
        
        var bookStuck = game.add.sprite(490, 260, 'bookStuck');
        bookStuck.scale.setTo(0.8, 0.8);
        
        var clock = game.add.sprite(560, 85, 'clock');
        clock.scale.setTo(0.8, 0.8);
        
        var silenceBoard = game.add.sprite(1148, 350, 'silenceBoard');
        silenceBoard.scale.setTo(0.6, 0.6);
        
        var boardSide = game.add.sprite(1500, 0, 'boardSide');
        boardSide.anchor.setTo(0.8, 0);
        boardSide.scale.setTo(0.7, 0.9);
        
        var floor = game.add.sprite(1500, 800, 'floor');
        floor.anchor.setTo(0.97, 0);
        floor.scale.setTo(0.68, 0.7);        
        
        
        var board = game.add.sprite(1400, 0, 'board');
        board.anchor.setTo(0.3, -0.5);
        board.scale.setTo(0.7, 0.7);
            
        
        
        var lWindow = game.add.sprite(35, 183, 'window');
        lWindow.scale.setTo(0.74, 0.91);
        
        var rWindow = game.add.sprite(730, 183, 'window');
        rWindow.scale.setTo(0.74, 0.91);
        
        var tree = game.add.sprite(1100, 680, 'tree');
        tree.scale.setTo(0.8, 0.8);
        
        var globeTable = game.add.sprite(670, 558, 'globeTable');
        globeTable.scale.setTo(0.8, 0.8);
        
        var handTopPart = game.add.sprite(1211, 473, 'handTopPart');
        handTopPart.scale.setTo(0.8, 0.8);
        
        var teacherBodyPart = game.add.sprite(1240, 440, 'teacherPart1');
        teacherBodyPart.scale.setTo(0.8, 0.8);
        
        var teacherHeadHappy = game.add.sprite(1265, 370, 'teacherHeadHappy');
        teacherHeadHappy.scale.setTo(0.8, 0.8);
        
        /*var teacherHeadAngry = game.add.sprite(1172, 442, 'teacherHeadAngry');
        teacherHeadAngry.scale.setTo(0.7, 0.7);*/
        
        
        
        var handBottomPart = game.add.sprite(1144, 410, 'handBottomPart');
        handBottomPart.scale.setTo(0.8, 0.8);
        
        
        
        // Structure End //
        
        
                   
        game.add.tween(cloudOne).to({ x:  -200, }, 30000, 'Linear', true);
        game.add.tween(cloudTwo).to({x: -200, }, 30000, 'Linear', true);
        game.add.tween(cloudThree).to({x: -200, }, 40000, 'Linear', true);
        game.add.tween(cloudFour).to({x: -200, }, 40000, 'Linear', true);
        game.add.tween(cloudFive).to({x: -200, }, 40000, 'Linear', true);
        
        
        
    },
    update: function(){
        //game.add.tween(cloudOne).to({ x:  2, }, 1000, 'Linear', true);*/
        if(cloudOne.x == -200){
            game.add.tween(cloudOne).from({ x:  1500, }, 30000, 'Linear', true);
            
        }
        if(cloudTwo.x == -200){
            game.add.tween(cloudTwo).from({ x:  1800, }, 30000, 'Linear', true);
            
        }
        if(cloudThree.x == -200){
            game.add.tween(cloudThree).from({ x:  1500, }, 30000, 'Linear', true);
            
        }
        if(cloudFour.x == -200){
            game.add.tween(cloudFour).from({ x:  2000, }, 60000, 'Linear', true);
            
        }
        if(cloudFive.x == -200){
            game.add.tween(cloudFive).from({ x:  2500, }, 60000, 'Linear', true);
            
        }
    }
};