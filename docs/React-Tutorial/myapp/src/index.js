import ReactDom from "react-dom/client"

const root = ReactDom.createRoot(document.getElementById("root"));
var mystyle ={
  color:"red",
  backgroundColor:"blue"
}
root.render(<h1 style={mystyle}>Hello World</h1>)

function About()
{
  return{
    <div>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, debitis iure delectus vel error eius eos, mollitia molestias laudantium ad cupiditate placeat, modi dolore. Perspiciatis doloribus architecto commodi fugiat sunt?</h1>
  }
}