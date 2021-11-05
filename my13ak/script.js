const showcase = document.querySelector(".showcase");
const classNames = ["showcase_bg_0", "showcase_bg_1", "showcase_bg_2", "showcase_bg_3"];

let index = 0;

// setInterval(()=>{
//   showcase.classList.remove(classNames[index]);
//   index++;
//   if(index > classNames.length - 1){
//     index = 0;
//   };
//   showcase.classList.add(classNames[index]);
// }, 5000);

showcase.onclick = (el)=>{
  console.log(el)
}