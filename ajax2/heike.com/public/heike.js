// // 用CORS跨域访问
// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:8888/friends.json");
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response);
//   }
// };
// request.send();
//用JSONP跨域访问, 支持跨域;
const random = Math.random();
window[random] = (data) => {
  console.log(data);
};
const script = document.createElement("script");
script.src = `http://localhost:8887/friends.js?Name=${random}`;
script.onload = () => {
  script.remove();
};
document.body.appendChild(script);
