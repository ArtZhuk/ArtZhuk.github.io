const itemList = [
  {name: "milk", checked: false},
  {name: "pork", checked: false},
  {name: "potato", checked: true},
  {name: "chicken", checked: true},
  {name: "vegitables", checked: false},
 ];

//  itemList.push({name: "Canned meat", checked: false})
//  localStorage.setItem("list", JSON.stringify(itemList))

 const root = ReactDOM.createRoot(document.querySelector(".app"));
 root.render(
  <App itemsToBuy={localStorage.list ? (JSON.parse(localStorage.list)) : []} />
 );