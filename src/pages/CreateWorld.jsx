import React, { useEffect, useRef } from 'react';
import { GraphEditor } from './js/graphEditor';
import { Graph } from './js/math/graph';
import { Viewport } from './js/viewport';
import { World } from './js/world';
import { scale } from './js/math/utils';
import { Link } from 'react-router-dom';
import { MyButton, EditorContainer } from '../GlobalComponents';

const CreateWorld = () => {
   const canvasRef = useRef(null);
   const graphRef = useRef(null);
   const graphEditorRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const setCanvasSize = () => {
         canvas.width = canvas.parentElement.clientWidth;
         canvas.height = canvas.parentElement.clientHeight;
      };

      setCanvasSize();

      const handleResize = () => {
         setCanvasSize();
      };

      window.addEventListener('resize', handleResize);

      const graphString = localStorage.getItem('graph');
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
         window.removeEventListener('resize', handleResize);
         graphEditor.dispose();
      };
   }, []);

   const handleSave = () => {
      const graph = graphRef.current;
      if (graph) {
         localStorage.setItem('graph', JSON.stringify(graph));
      }
   };

   const handleReset = () => {
      const graphEditor = graphEditorRef.current;
      if (window.confirm('Are you sure you want to reset the World?')) {
         if (graphEditor) {
            graphEditorRef.current.dispose();
         }
      }
   };

   return (
      <EditorContainer>
         <canvas ref={canvasRef} id='myCanvas'></canvas>
         <MyButton
            style={{
               '--offsetBottom': '135px',
               '--offsetRight': '15px',
               '--position': 'absolute',
            }}
            onClick={handleReset}
         >
            <a>Reset 🗑️</a>
         </MyButton>
         <MyButton
            style={{
               '--offsetBottom': '75px',
               '--offsetRight': '15px',
               '--position': 'absolute',
            }}
            onClick={handleSave}
         >
            <a>Save 💾</a>
         </MyButton>
         <MyButton
            style={{
               '--offsetBottom': '15px',
               '--offsetRight': '15px',
               '--position': 'absolute',
            }}
         >
            <Link to={'/start'}>Continue ➜</Link>
         </MyButton>
         <MyButton
            style={{
               '--offsettop': '15px',
               '--offsetRight': '15px',
               '--position': 'absolute',
            }}
         >
            <a>Edit Road</a>
         </MyButton>
         <MyButton
            style={{
               '--offsettop': '75px',
               '--offsetRight': '15px',
               '--position': 'absolute',
            }}
         >
            <a>Place Vehicle</a>
         </MyButton>
      </EditorContainer>
   );
};

export default CreateWorld;
