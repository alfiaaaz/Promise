// function p1(){
//     return new Promise(function(resolve,reject){
//               const rand=Math.floor(Math.random()*10);
//               console.log(rand);
//               if(rand%2===0){
//                 resolve();
//               }
//               else{
//                 reject();
            //   }
    // })
// }/
// console.log(p1());



// let rand=Math.floor (Math.random()*10+11);
// console.log(rand);


function makeChese()
{
    return new Promise(function(resolve,reject){
        console.log('start making chesse.....');
        setTimeout(()=>{
            const chesse='🧀';
            console.log(`chesee is ready${chesse}`)
            resolve(chesse);
        },3000);
    })
}

function makeBase(){
    return new Promise(function(resolve,reject){
        console.log('start making pizza base ')
        setTimeout(()=>{
            const base='🍞'
            console.log(`base is ready${base}`)
            resolve(base);
        },3000)
    })
}

function addTopping(){
    console.log('add topping');
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const topping='🍅'
            console.log(`topping is added ${topping}`)
            resolve(topping);
        },3000);
    })
   
}

async function makePizza(){
    const getchese=await makeChese();
    console.log(getchese)
    const base=await makeBase();
    console.log(base);
    const topping =await addTopping();
    console.log(topping);
}

makePizza()
makeChese()
.then(makeBase())
.then(addTopping())
.then(()=>{
})

