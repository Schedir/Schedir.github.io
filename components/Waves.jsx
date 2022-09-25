import { useScroll,  } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Waves = () => {

    const mountRef = useRef(null);

    useEffect(() => {

        var SEPARATION = 60, AMOUNTX = 115, AMOUNTY = 15;

        var container;
        var camera, scene, renderer;
        
        
        if (window.WebGLRenderingContext){
            renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            }
        else {
            renderer = new THREE.CanvasRenderer({
                alpha: true,
                antialias: true});
            }
        

        var particles, particle, count = 0;
        
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        
        init();
        animate();
        
        function init() {
        
            container = document.createElement( 'div' );
            mountRef.current.appendChild( container );
            if(container) {
                container.className += container.className ? 'waves' : 'waves';
            }
        
            camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.y = 350 //changes how far back you can see i.e the particles towards horizon
            camera.position.z = 550; //This is how close or far the particles are seen
            
        
          camera.rotation.x = 0.25;
            
            scene = new THREE.Scene();
        
            particles = new Array();
        
            var PI2 = Math.PI * 2;
            var material = new THREE.SpriteMaterial( {
    
                color: 0xF4F5F5, //changes color of particles
                program: function ( context ) {
        
                    context.beginPath();
                    context.arc( 0, 0, 0.3, 0, PI2, true );
                    context.fill();
        
                }
            } );
        
            var i = 0;
        
            for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        
                for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        
                    particle = particles[ i ++ ] = new THREE.Sprite( material );
                    particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                    particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
                    scene.add( particle );
        
                }
            }
        
            if (window.WebGLRenderingContext){
                renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                }
            else {
                renderer = new THREE.CanvasRenderer();
                }

            renderer.setSize( document.documentElement.clientWidth , window.innerHeight );
            renderer.setClearColor( 0x000000, 0 );
            mountRef.current.appendChild( renderer.domElement );
        
            window.addEventListener( 'resize', onWindowResize, false );
        
        }
        
        function onWindowResize() {
        
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
        
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        
            renderer.setSize( window.innerWidth, window.innerHeight );
        
        }
        
        function animate() {
        
            requestAnimationFrame( animate );
        
            render();
        
        }
        
        function render() {
            
            var i = 0;
        
            for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        
                for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        
                    particle = particles[ i++ ];
                    particle.position.y = ( Math.cos( ( ix + count ) * 0.5 ) * 20 ) + ( Math.cos( ( iy + count ) * 0.5 ) * 20 );
                    particle.scale.x = particle.scale.y = ( Math.cos( ( ix + count ) * 0.3 ) + 2 ) * 1.5 + ( Math.cos( ( iy + count ) * 0.5 ) + 1 ) * 1.5;
                }
            }
            renderer.render( scene, camera );
            // This increases or decreases speed
            count += 0.1;
        
        };

        return () => mountRef.current.removeChild( renderer.domElement);
        },
     []);
  
    return (
        <div ref={mountRef} className='bg-transparent mx-auto'>

        </div>
  );
}

export default Waves;