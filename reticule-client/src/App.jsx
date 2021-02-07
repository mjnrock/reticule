import { useEffect, useRef, useState } from "react";

const host = `192.168.86.22`;
const port = 81;

function App() {
    const imgRef = useRef();
    const canvasRef = useRef();

    const [ state, setState ] = useState({
        p: null,
        c: 0,
    });

    useEffect(() => {
        setTimeout(() => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(imgRef.current, 0, 0);

            ctx.lineWidth = 2;
            ctx.strokeStyle = "#f88";
            ctx.fillStyle = "#f33";
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            setState({
                p: state.c,
                c: state.c + 1
            });
        }, 33);
    });
    
    return (
        <>
            <img
                ref={ imgRef }
                alt="stream"
                src={ `http://${ host }:${ port }/stream` }
            />
            <canvas
                ref={ canvasRef }
            />

            <button onClick={ e => console.log(imgRef.current) }>Ref</button>
        </>
    );
}

export default App;