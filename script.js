
  
      
        /*// Set up the scene, camera, and renderer
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("globeCanvas"), alpha: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          document.body.appendChild(renderer.domElement);
  
          // Create a sphere (Earth)
          const geometry = new THREE.SphereGeometry(5, 64, 64);
          const textureLoader = new THREE.TextureLoader();
          const material = new THREE.MeshBasicMaterial({
              map: textureLoader.load('Logo.jpg')
          });
  
          const globe = new THREE.Mesh(geometry, material);
          scene.add(globe);
  
          camera.position.z = 10;
  
          // Animation loop for rotation
          function animate() {
              requestAnimationFrame(animate);
              globe.rotation.y += 0.002;
              renderer.render(scene, camera);
          }
  
          animate();
  
          // Adjust canvas on window resize
          window.addEventListener('resize', () => {
              renderer.setSize(window.innerWidth, window.innerHeight);
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
          });*/
      

         /* function toggleCards() {
            document.querySelector(".cards").classList.toggle("active");
          }*/
          