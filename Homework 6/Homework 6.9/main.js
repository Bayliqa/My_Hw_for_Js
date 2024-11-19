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

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardsSuit === 'spade'));;

// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.cardsSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardsSuit === 'clubs' &&  (card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9')));


