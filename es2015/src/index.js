

import Items from './foods.js'
import {Choice, Remove} from './helpers.js'



let RandomFruit = Choice(Items)
console.log(RandomFruit)

console.log("I’d like one item, please.")
console.log(`Here you go: ${RandomFruit}`)
console.log('Delicious! May I have another?')

let remaining = Remove(RandomFruit, Items);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);






