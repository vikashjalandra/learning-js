// for loop



for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        // console.log(`${i} is Middle`);
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table:${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);

    }
}

let myArray =['flash', 'batman', 'supername']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`Detected ${5}`);
//         break;
//     }
//     console.log(`Value:${index}`);
// }

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`Detected ${5}`);
        continue;
    }
    console.log(`Value:${index}`);
}

