import React from 'react'
let users = ['Mehmet', "Ahmet", "Murat"]
let users1 = [{
     //bu tanim array icinde obje oldugu anlamina gelir
     name: "furkan",
     age: 20
}, {
     name: "ahmet",
     age: 15
}, {
     name: "salih",
     age: 25
}]
/*
push=>arrayin sonuna yeni bir eleman ekler
map=> array icinde tek tek doner. for dongusu kullanmaktan kurtarir
find=>verilen array veya objede istenilen degeri bulmaya yarar. ilk elemani buldugu anda resolve olarak doner. geri kalana bakmaz
filter=>filtreleme yapar. 
some=>array icindeki elemanlar icin verilen degerlerden herhangi birisi dogru donuyorsa true yoksa false doner 
every=>areayin tum elemanlarinin verilen sarta uymasini bekler
includes=>verilen degerin array icinde gecip gecmedigine bakar. varsa true yoksa false doner
*/

//push()
users.push('Furkan');
console.log(users);

//map()
//array icindeki elemanlari map metodundaki kullanimi
users.map((e) => {
     console.log(e);
})
//array objesi icindeki elemanlarin map metodundaki kullanimi
users1.map((item) => {
     console.log(item.name);
})

//find()
let findIt = users1.find((item) => {
     return item.name === "ahmet" && item.age > 14
}
)
console.log(findIt);
console.log(users1.find((item) => item.age > 19));

//NOT!!=> find buldugu ilk elamani getirirken filter ne kadar sarta uyan eleman varsa getirir


//filter()
let filter = users1.filter((item) => item.age > 19)
console.log(filter);

//some()
console.log(users1.some((e) => e.age === 20));

//every
console.log(users1.every((item) => item.age > 13));

//includes
let meyveler = ['elma', 'muz', 'armut']
console.log(meyveler.includes('muz'));

function ArrayFuntions() {
     return (
          <>
               <h1>Array Functions</h1>
          </>
     )
}
export default ArrayFuntions