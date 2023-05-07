import './style.css';
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

loader.load('3dModels/star_destroyer.glb', function (gltf) {

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(10000);
camera.position.setX(-300);
camera.position.setY(150);
camera.rotatetY(Math.PI / -4);

renderer.render(scene, camera);

/*const geometry = new THREE.IcosahedronGeometry(10, 3, 16, 10);
const material = new THREE.MeshStandardMaterial( {color: 0x01332d, wireframe: true });
const icosa = new THREE.Mesh(geometry, material);
scene.add(icosa);

const spheretexture = new THREE.TextureLoader().load('/img/img2.jpg');
const apa = new THREE.Mesh(
  new THREE.SphereGeometry(20, 100, 16, 10),
  new THREE.MeshStandardMaterial( { map: spheretexture } )
);
scene.add(apa);*/

const pointLight = new THREE.PointLight(0xffffff, 1, 1500);
pointLight.position.set(-300, 200, 600);
scene.add(pointLight);

/*const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);*/

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

/*const controls = new OrbitControls(camera, renderer.domElement);*/


/*Scroll animation*/
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = 2000 + (t * 1);
  //camera.rotation.y = (Math.PI / -4) + (t * 0.0002);
  console.log(t);

}
document.body.onscroll = moveCamera;
moveCamera();

/*Animate*/
function animate() {
  requestAnimationFrame(animate);

  /*icosa.rotation.x += 0.009;
  icosa.rotation.y += 0.003;
  icosa.rotation.z += 0.009;*/

  renderer.render(scene, camera);
}
animate();