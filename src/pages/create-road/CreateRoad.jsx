import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GraphEditor } from "./js/graphEditor";
import { Graph } from "./js/math/graph";
import { Viewport } from "./js/viewport";
import { World } from "./js/world";
import { scale } from "./js/math/utils";
import { Link } from "react-router-dom";
import { Button } from "../../GlobalComponents";

const CreateRoad = () => {
    const canvasRef = useRef(null);
    const graphRef = useRef(null);
    const graphEditorRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const setCanvasSize = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        setCanvasSize();

        const handleResize = () => {
            setCanvasSize();
        };

        window.addEventListener("resize", handleResize);

        const graphString = localStorage.getItem("graph");
        const graphInfo = graphString ? JSON.parse(graphString) : null;
        const graph = graphInfo ? Graph.load(graphInfo) : new Graph();
        graphRef.current = graph;
        const world = new World(graph);

        const viewport = new Viewport(canvas);
        const graphEditor = new GraphEditor(viewport, graph);
        graphEditorRef.current = graphEditor;
        let oldGraphHash = graph.hash();

        const animate = () => {
            viewport.reset();
            if (graph.hash() !== oldGraphHash) {
                world.generate();
                oldGraphHash = graph.hash();
            }
            const viewPoint = scale(viewport.getOffset(), -1);
            world.draw(ctx, viewPoint);
            ctx.globalAlpha = 0.3;
            graphEditor.display();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            graphEditor.dispose();
        };
    }, []);

    const handleSave = () => {
        const graph = graphRef.current;
        if (graph) {
            localStorage.setItem("graph", JSON.stringify(graph));
        }
    };

    const handleReset = () => {
        const graphEditor = graphEditorRef.current;
        if (window.confirm("Are you sure you want to reset the graph?")) {
            if (graphEditor) {
                graphEditorRef.current.dispose();
            }
        }
    };


    return (
        <EditorContainer>
            <canvas ref={canvasRef} id="myCanvas"></canvas>
            <Button style={{ '--offsetBottom': '15px', '--offsetRight': '15px', '--position': 'absolute' }}>
                <Link to={'/tune'}>Continue ➜</Link>
            </Button>
            <Button style={{ '--offsetBottom': '75px', '--offsetRight': '15px', '--position': 'absolute' }} onClick={handleSave}>
                <a>Save 💾</a>
            </Button>
            <Button style={{ '--offsetBottom': '135px', '--offsetRight': '15px', '--position': 'absolute' }} onClick={handleReset}>
                <a>Reset 🗑️</a>
            </Button>
        </EditorContainer>
    );
};

export default CreateRoad;

const EditorContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;



