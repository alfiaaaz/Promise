// console.log('Hello');

// console.log(this);

// this in function

// function fun(){
//     return this;
// }


// console.log(fun());

// fun=()=>{
//         return this;
// }

// console.log(fun());

// let obj={
//     //key :value,
//     name: 'Alfia',
//     id:229113,
//     fun:()=>{
//         return `${this.name} ${this.id}`;
//     }
// }
// // console.log(obj.fun());
// // console.log(obj.id);


// const Person1={
//     name:'Alfia',
//     surname: 'Naaz',
//     sayname:function(city, country){
//         return `${this.name} ${this.surname} ${city} ${country}`
//     }
// }

// const Person2={
//          name: 'Ammi',
//          surname: 'Jaan'
// }
// console.log(Person1.sayname.call(Person2, 'Dubai','India'));
// console.log(Person1.sayname.apply(Person2,['Delhi','India']));
// const p2=Person1.sayname.bind(Person2,'Banglore','India');
// console.log(p2());




// function student(name,age,rollno){
//     this.name=name;
//     this.age=age;
//     this.rollno=rollno;
// }

// let s2=new student('Rahul',19,2290);
// // let s3=new student('Rohit',20,2267);

// console.log(s2);

// function DownloadFile(url,download){
//     console.log('file start downloading.......')
//     setTimeout(()=>{
//         let path=url.split('/').pop();
//           download(path);
//     },2000);
// }
// function compressfile(path,compress){
//     console.log('file start compress');
//     setTimeout(()=>{
//         const comp=path.split('.')[0]+'.zip';
//         compress(comp);
//     },2000);
// }

// function Uploadfile(comp,upload){
//     console.log('file start uploading');
//     setTimeout(()=>{
//         const upl='http://LocalStorage'+comp;
//         upload(upl);
//     },2000);
// }
// DownloadFile('https://www.facebook.com/profile.jpg',function(path){
//     console.log(`file download successfully ${path}`);
//     compressfile(path,function(comp){
//         console.log(`file compress sucessfully......${comp}`);
//         Uploadfile(comp,function(upl){
//             console.log(`file upload sucessfully.....${upl}`);
//             console.log('Everything is done!!')
//         })
//     })
// })


// let row=10
// for(let i=1; i<=row; i++){
//     let str =''
//     for(let j=0; j<i; j++){
//         str+='*';
//     }
//     console.log(str);
// }

let row=5 , col=3;
for(let i=1; i<=row; i++){
    let str="";
    for(let j=1; j<=col; j++){
        if(i===1|| j===1|| i===row|| j===col){
            str+="*";
        }
        else{
            str+=''
        }
    }
    console.log(str);
}