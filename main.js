var current = "start";

var Rooms={
    start:{
        title:"Комната в общаге",
        description:'Надо меньше пить!',
        img:"img/rouche.jpg",
        exits:['hall']
    },
    hall:{
        title:"Холл",
        description:'Ты в коридоре. Куда дальше?',
        img:"img/hall.jpg",
        exits:['toullet','start','watch']
    },
    toullet:{
        title:"Туалет",
        description:'Кажется он занят...',
        img:"img/toullet.jpg",
        exits:['hall','window']
    },
    window:{
        title:"Окно",
        description:'Ты умер. Нажми чтобы начать заново',
        img:"img/window.jpg",
        exits:['start']
    },
    watch:{
        title:"Вахта",
        description:'Нужно пройти незамеченным',
        img:"img/watch.jpg",
        exits:['hall','kb','stop']
    },

    kb:{
        title:"КБ",
        description:'happy happy',
        img:"img/kb.jpg",
        exits:['watch','stop']
    },
    stop:{
        title:"Остановка",
        description:'Пора на пару',
        img:"img/stop.jpg",
        exits:['udsu','kb', 'watch']
    },
    udsu:{
        title:"Пара JS",
        description:'',
        img:"img/udsu.jpg",
        exits:['stop']
    },
};


function render() {
    var room = Rooms[current];
    document.getElementById('title').innerHTML = room.title;
    document.getElementById('description').innerHTML = room.description;
    document.getElementById('roomImage').src = room.img;
    var exits = document.getElementById('exits');
    exits.innerHTML = " ";

    for (var i = 0; i < room.exits.length; i++) {
        (function(i) { // создаем замыкание
            var button = document.createElement('button');
            button.innerHTML = Rooms[room.exits[i]].title;
            exits.appendChild(button);
            button.addEventListener('click', function() {
                current = room.exits[i]; // используем значение i из замыкания
                render();
            });
        })(i); // передаем текущее значение i
    }
}

window.onload = function() {
    render();
}

