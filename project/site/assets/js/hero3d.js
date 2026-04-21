/* Calon hero — scroll-driven 3D organic orb
   - Three.js icosahedron with animated vertex noise (morphing blob)
   - Peach-coral emissive material
   - Scale/camera distance tied to scroll progress through .hero
*/
(function(){
  const mount = document.getElementById('hero-canvas');
  if(!mount) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  function fallback(){ mount.classList.add('hero-fallback'); }
  if(prefersReduced){ fallback(); return; }

  // Wait for Three.js (loaded globally via <script>)
  function whenThreeReady(cb, tries){
    tries = tries || 0;
    if(window.THREE){ cb(); return; }
    if(tries > 40){ fallback(); return; }
    setTimeout(()=>whenThreeReady(cb, tries+1), 50);
  }
  whenThreeReady(init);

  function init(){
    const THREE = window.THREE;
    try{
      const tc = document.createElement('canvas');
      if(!tc.getContext('webgl') && !tc.getContext('experimental-webgl')){ fallback(); return; }
    }catch(e){ fallback(); return; }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({antialias: !isMobile, alpha: true, powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0x3a2a24, 0.45));
    const keyLight = new THREE.PointLight(0xF5B08A, 3.5, 30, 1.6);
    keyLight.position.set(2.5, 2, 3); scene.add(keyLight);
    const warmLight = new THREE.PointLight(0xE8735C, 2.2, 30, 1.8);
    warmLight.position.set(-2.8, -1.2, 2.4); scene.add(warmLight);
    const rimLight = new THREE.PointLight(0x5BC8E8, 1.2, 30, 2.0);
    rimLight.position.set(0, -3, -2); scene.add(rimLight);

    // Organic blob
    const geo = new THREE.IcosahedronGeometry(1.5, isMobile ? 20 : 40);
    const basePositions = geo.attributes.position.array.slice();

    const mat = new THREE.MeshStandardMaterial({
      color: 0xF5B08A, roughness: 0.35, metalness: 0.15,
      emissive: 0xF5B08A, emissiveIntensity: 0.08, flatShading: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const wireMat = new THREE.MeshBasicMaterial({color: 0xF5B08A, wireframe:true, transparent:true, opacity: 0.05});
    const wireMesh = new THREE.Mesh(geo, wireMat);
    scene.add(wireMesh);

    // Tiny 3D value-noise
    function hash(x,y,z){
      let h = Math.sin(x*374.17 + y*913.71 + z*271.13) * 43758.5453;
      return h - Math.floor(h);
    }
    function fade(t){return t*t*t*(t*(t*6-15)+10);}
    function lerp(a,b,t){return a + (b-a)*t;}
    function noise3(x,y,z){
      const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
      const xf = x-xi, yf = y-yi, zf = z-zi;
      const u = fade(xf), v = fade(yf), w = fade(zf);
      const n000 = hash(xi,yi,zi), n100 = hash(xi+1,yi,zi);
      const n010 = hash(xi,yi+1,zi), n110 = hash(xi+1,yi+1,zi);
      const n001 = hash(xi,yi,zi+1), n101 = hash(xi+1,yi,zi+1);
      const n011 = hash(xi,yi+1,zi+1), n111 = hash(xi+1,yi+1,zi+1);
      const x00 = lerp(n000,n100,u), x10 = lerp(n010,n110,u);
      const x01 = lerp(n001,n101,u), x11 = lerp(n011,n111,u);
      const y0 = lerp(x00,x10,v), y1 = lerp(x01,x11,v);
      return lerp(y0,y1,w)*2-1;
    }

    function resize(){
      const rect = mount.getBoundingClientRect();
      const w = rect.width || window.innerWidth;
      const h = rect.height || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w/h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    const heroEl = document.querySelector('.hero');
    let scrollProgress = 0;
    function updateScroll(){
      if(!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      scrollProgress = Math.max(0, Math.min(1, scrolled / Math.max(1,total)));
    }
    updateScroll();
    window.addEventListener('scroll', ()=>{
      updateScroll();
      if(heroEl) heroEl.style.setProperty('--p', scrollProgress.toFixed(3));
    }, {passive:true});

    const positions = geo.attributes.position;
    let t0 = performance.now();
    let rafId = null;
    let running = true;

    function animate(){
      if(!running){ rafId = null; return; }
      const t = (performance.now() - t0) * 0.001;

      const amp = 0.22 + Math.sin(t*0.3)*0.04;
      const freq = 1.2;
      for(let i=0;i<positions.count;i++){
        const ox = basePositions[i*3];
        const oy = basePositions[i*3+1];
        const oz = basePositions[i*3+2];
        const len = Math.sqrt(ox*ox+oy*oy+oz*oz) || 1;
        const nx = ox/len, ny = oy/len, nz = oz/len;
        const n = noise3(nx*freq + t*0.4, ny*freq + t*0.3, nz*freq - t*0.2);
        const disp = 1 + n*amp;
        positions.setXYZ(i, ox*disp, oy*disp, oz*disp);
      }
      positions.needsUpdate = true;
      geo.computeVertexNormals();

      mesh.rotation.y = t*0.18;
      mesh.rotation.x = Math.sin(t*0.1)*0.15;
      wireMesh.rotation.copy(mesh.rotation);

      // Scroll-driven zoom
      const camZ = 5.2 - scrollProgress*3.0;
      camera.position.z = camZ;
      const s = 1 + scrollProgress*0.4;
      mesh.scale.setScalar(s);
      wireMesh.scale.setScalar(s);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    animate();

    // Pause when hero leaves viewport
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        running = e.isIntersecting;
        if(running && !rafId){ t0 = performance.now() - 1000; animate(); }
      });
    }, {threshold:0});
    if(heroEl) io.observe(heroEl);
  }
})();
