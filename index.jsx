// class Hello extends React.Component{

//     render(){
//         return <h1>Hello React</h1>
//     }
// }



function tick(){
    const element = (
        <div>
            <h1>Hello</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}



setInterval(tick, 1000);


// ReactDOM.render(<Hello />, document.getElementById('root'));