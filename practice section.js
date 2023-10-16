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

// function DownloadFile(url,download){
//     console.log('Make chese........')
//     setTimeout(()=>{
//         let path=url.split('/').pop();
//           download(path);
//     },5000);
// }
// function compressfile(path,compress){
//     console.log('Make base......');
//     setTimeout(()=>{
//         const comp=path.split('.')[0];
//         compress(comp);
//     },2000);
// }

// function Uploadfile(comp,upload){
//     console.log('make topping......');
//     setTimeout(()=>{
//         const upl='http://LocalStorage'+comp;
//         upload(upl);
//     },1000);
// }
// DownloadFile('https://www.facebook.com/profile.jpg',function(path){
//     console.log(`Make a chese sucessfully.... ${path}`);
//     compressfile(path,function(comp){
//         console.log(`Make a base sucessfully......${comp}`);
//         Uploadfile(comp,function(upl){
//             console.log(`Make a topping sucessfully.....${upl}`);
//             console.log('Everything is done!!')
//         })
//     })
// })


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
            const topping='🍅';
            console.log(`topping is added ${topping}`)
            resolve(topping);
        },3000);
    })
   
}

makeChese()
.then(makeBase())
.then(addTopping())
.then(()=>{
    
})