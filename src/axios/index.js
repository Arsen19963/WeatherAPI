import axios from "axios";

// export const  getData = async ()=>{//async
//     const res = await fetch('/m.json')
//     const parsetRes = await res.json()
//     return parsetRes;

// }

export const getData = () => {
  return fetch("/m.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
