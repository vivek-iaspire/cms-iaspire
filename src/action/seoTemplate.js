// export  const getDomain = () =>{ 
// fetch("https://cors-anywhere.herokuapp.com/https://staging-seo.iaspire.tech/v1/domain")
// .then(res=>{
//     if(res.ok){  
//         //return res.json();
//         return "vivek check"
//     }else{
//         throw Error(res.statusText);
//     }
// }).then((res)=>{ 
// return res;
// })
// .catch(error => console.log(error))
// }
const url = "https://cors-anywhere.herokuapp.com/https://staging-seo.iaspire.tech/v1/domain"
export const getDomain =  () => {
  fetch(url)
         .then(res => console.log(res))

//     .then(res => {
//         if(res.ok){
//             return res.json()
//         }
//     })
//     .then(res =>{
//         return res.json()
//     })
// }




// module.exports = {
   
}