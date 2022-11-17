import React from "react";

//not
/* eger ()=>{} var ise return ile geri donus saglanir
eger ()=>... var iser return kullanilamaz...*/
//HAZIR METODLAR

//-----------------------------------------------------------------//
// setTimeout(() => {
//      console.log("merhaba dunya");
// }, 2000) //icine yazilan degeri belirli saniyede bir calismasini saglar , den sonra kac ms de bir calismasi gerektigini gosterir
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
// setInterval(() => {
//      console.log('her saniye calisacagim');
// }, 1000);
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
// let sayHi = (cb) => {
//      cb(); //say hi foknsıyonuna calcback fonksıyonu gonderdık. burada da çalışmasını sağladık
// }
// sayHi(() => { console.log('hello'); }); //oluşturulan fonksıyona paramtere olarak bır fonkıyon gonderilebilir.
//-----------------------------------------------------------------//





//VERI CEKMEK ICIN

//-----------------------------------------------------------------//
//js de herhangi bir veri kaynagina baglanip veri cekebilen bir fonksiyon vardir. fetch
//import Fetch from 'node-fetch';
// Fetch("https://jsonplaceholder.typicode.com/users").then((data) => data.json())
//      .then((users) => {
//           console.log('users yukledi', users);
//      })
// fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json())
//      .then((posts) => {
//           console.log('posts yuklendi', posts);
//      })
// getData();
// async function getData() {
//      //verilerin istenilen sirada gelmesini istiyorsak fonksiyon icinde siralama yukaridan assa olucak sekilde ve await metodu ile cagirmamiz gerekiyor
//      let postss = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
//      console.log(postss);

//      let users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//      console.log(users);
// }
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
//(()=>{})() //tanimsiz ve sayfa basinda otomatik calisan fonksiyon boyle tanimlanir
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
//axios fetc gibi bir api alma moduludur. ancak json veri tipine donusturme gerektirmeden otomatik json veri getirir
//async ve await beraber kullanilir
// import axios from 'axios'
// (async () => {
//      let { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//      console.log(users);
// })()
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
//axios ve promise nasil calisir anlatim
// import axios from 'axios'
// let getComment = (number) => {
//      //Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. 
//      //promise in calcaback alaninda resault ve reject adinda iki parametre vardir.
//      // resolve bu islem basarili oldu datan budur demek. reject ise hata oldu reddetdim demektir
//      return new Promise((resolve, reject) => {
//           if (number === 1) {
//                resolve({ text: "selam" });
//           } else {
//                reject("bir problem olustu")
//           }
//           //bu alanda string donmek zorunda degilsin. number veya obje donulebilir.
//      })
// }
// //bir promise then oldugunda then chaine duser reject oldugunda da .cath chaine duser
// // .cath chaine eror aninda hatayi almaya yarar
// getComment(2)
//      .then((data) => console.log(data))//eger resolve gelmisse
//      .catch((e) => console.log(e, "recet e dustu"));//eger reject gelmisse
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
// import axios from 'axios'
// let getUsers = () => {
//      return new Promise(async (resolve, reject) => {
//           let { data } = await axios("https://jsonplaceholder.typicode.com/users")
//           resolve(data)
//           reject("bir hata oldu")
//      }
//      )
// }
// getUsers()
//      .then((data) => console.log(data))
//      .catch((e) => console.log(e,))
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
// import axios from 'axios';
// let getPosts = () => {
//      return new Promise(async (resolve, reject) => {
//           let { data } = await axios("https://jsonplaceholder.typicode.com/posts");
//           resolve(data);
//           reject("bir problem ile karsilasildi")
//      })
// }
// getPosts()
//      .then((data) => console.log(data))
//      .catch((e) => console.log(e))
//-----------------------------------------------------------------//


//-----------------------------------------------------------------//
// import axios from 'axios'
// let getPostId = (postId) => {
//      return new Promise(async (resolve, reject) => {
//           let { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + postId);
//           resolve(data);
//           reject("bir hata oldu");
//      })
// }
// getPostId(5)
//      .then((data) => console.log(data))
//      .catch((e) => console.log(e))
//-----------------------------------------------------------------//


function Calback() {

     return (
          <>
               <div>
                    <h1>Metod ve Api kullanimi</h1>
               </div>
          </>
     )
}

export default Calback;