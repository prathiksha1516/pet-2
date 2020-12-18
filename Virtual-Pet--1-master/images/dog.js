var dog 

function preload(){
console.log
}


function setup(){
feedingtime= database.ref('feedtime');
feedtime.on("value"function(data))
lastfed=data.val   
}

function draw(){
dogImage.createSprite=("200,200,20,20")
dogImage.addImage
dogImage1.createSprite=("300,200,20,20")
dogImage1.addImage
milk.createSprite=("300,200,20,20")
milk.addImage
}
drawSprite(){
feed=createButton=("feed the dog")
feed.position(700,95)
feed.mousepreesed(feeddogs)

addfood=createButton=("aallfood")
addfood.position(800,95)
addfood.mousepreesed(allfood)

}