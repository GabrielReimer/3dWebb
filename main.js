import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();

loader.load('3dModels/star_destroyer.glb', function (gltf) {

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(1);
camera.position.setY(30);

renderer.render(scene, camera);

const geometry = new THREE.IcosahedronGeometry(10, 3, 16, 10);
const material = new THREE.MeshStandardMaterial( {color: 0x01332d, wireframe: true });
const icosa = new THREE.Mesh(geometry, material);

const spheretexture = new THREE.TextureLoader().load('bild4.jpg');
const apa = new THREE.Mesh(
  new THREE.SphereGeometry(20, 100, 16, 10),
  new THREE.MeshStandardMaterial( { map: spheretexture } )
);

scene.add(apa);
scene.add(icosa);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15, 15, 15);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  icosa.position.x += 5;
  icosa.rotation.x += 0.009;
  icosa.rotation.y += 0.003;
  icosa.rotation.z += 0.009;
  renderer.render(scene, camera);
}

animate();