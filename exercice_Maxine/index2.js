function sayHello (name){
    alert("Hello " + name);
}

function personSayHello (name){
    sayHello(name)
}

personSayHello("Nina")

function familyHello(){
    personSayHello(" globule");
    personSayHello("blabla");
    personSayHello( "Chocolat");
}

familyHello()