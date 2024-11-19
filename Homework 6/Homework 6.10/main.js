const suits = ['spade', 'diamond','heart', 'clubs']
const values=  ['6','7','8','9','10','ace','jack','queen','king']


const cards= []

for (const suit of suits) {
    for (const value of values) {
        const card = {cardsSuit: suit, value: value}
        if (suit === 'heart' || suit === 'diamond' ) {
            card.color = "red";
        } else {
            card.color = "black";
        }
        cards.push(card)
    }
}
console.log(cards);

let reduce = cards.reduce((acc, card) => {
    if (card.cardsSuit === 'spade'){
        acc.spades.push(card)
    }if (card.cardsSuit === 'diamond' ) {
        acc.diamonds.push(card)
    }if (card.cardsSuit === 'clubs' ) {
        acc.clubs.push(card)
    }if (card.cardsSuit === 'heart'){
        acc.hearts.push(card)
    } return acc;
},{spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(reduce)
