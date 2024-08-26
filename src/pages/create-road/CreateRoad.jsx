import React, { useEffect, useRef } from "react";
import { Container, Wrapper } from "../../GlobalComponents";
import { GraphEditor } from "./js/graphEditor";
import { Graph } from "./js/math/graph";
import { Viewport } from "./js/viewport";
import { World } from "./js/world";
import { scale } from "./js/math/utils";


const CreateRoad = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = 500;
        canvas.height = 500;

        // Assuming all the required classes and functions are available in the global scope
        const graphString = localStorage.getItem("graph");
        const graphInfo = graphString ? JSON.parse(graphString) : null;
        const graph = graphInfo ? Graph.load(graphInfo) : new Graph();
        const world = new World(graph);

        const viewport = new Viewport(canvas);
        const graphEditor = new GraphEditor(viewport, graph);

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

        // Clean-up on component unmount
        return () => {
            graphEditor.dispose();
        };
    }, []);

    return (
        <Wrapper>
            <Container>
                <canvas ref={canvasRef} id="myCanvas"></canvas>
            </Container>
        </Wrapper>
    );
};

export default CreateRoad;
