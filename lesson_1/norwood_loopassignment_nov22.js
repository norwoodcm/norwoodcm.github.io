let bottles = 99;
const originalbottles = bottles;

if (isNaN(bottles) || bottles > 99 || bottles <=0) {
    console.log(`${bottles} is not a valid entry. Please enter a valid number of bottles (1-99)`)
} 

for (bottles; bottles < 100 && bottles >= 0; bottles--) {
    if (bottles > 2) {
        console.log(`${bottles} bottles of Knob Creek on the wall, ${bottles} bottles of Knob Creek.\nTake one down and pass it around, ${bottles - 1} bottles of Knob Creek on the wall.`);
    } else if (bottles === 2) {
        console.log(`${bottles} bottles of Knob Creek on the wall, ${bottles} bottles of Knob Creek.\nTake one down and pass it around, ${bottles - 1} bottle of Knob Creek on the wall.`); 
    } else if (bottles === 1) {
        console.log(`${bottles} bottle of Knob Creek on the wall, ${bottles} bottle of Knob Creek.\nTake one down and pass it around, no more bottles of Knob Creek on the wall.`);
    } else if (bottles === 0 && originalbottles != 0) {
        console.log(`No more bottles of Knob Creek on the wall, no more bottles of Knob Creek.\nGo to the store and buy some more, ${originalbottles} bottles of Knob Creek on the wall.`);
    } 
}