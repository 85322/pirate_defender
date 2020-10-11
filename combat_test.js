let player = {hp:150, attack:25};
let opponent = {hp:100, attack:20};

function combat(){
    while (player.hp > 0) {
        opponent.hp - player.attack;
        player.hp - opponent.hp;
        console.log(player.hp);
}

};
console.log(player.hp);

function addition(){
    let num1 = 2;
    let num2 = 5;
    console.log(num1 + num2 + " is the result.")
};