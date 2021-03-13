function mixin (target,...sources){
    Object.assign(target,...sources)
  }
  
  var canWalk = {
    walk : function (){
      console.log('Walking...')
    }
  }
  
  var canEat = {
    eat : function (){
      console.log('Eating...')
    }
  }
  var canSwim = {
    swim : function(){
      console.log('Swimming...')
    }
  }
  
  function Person (name) {
    this.name = name
  }
  
  mixin (Person.prototype,canEat,canWalk)
  
  function GoldFish(name){
    this.name = name
  }
  
  mixin(GoldFish.prototype,canEat,canSwim)
  
  var p1 = new Person('niaz')
  console.log(p1)
  
  var g1 = new GoldFish('bla bla')
  console.log(g1)