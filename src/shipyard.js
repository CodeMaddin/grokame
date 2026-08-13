import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createShip, dressShip } from './ship.js';

export class Shipyard {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#07040f');
    this.scene.fog = new THREE.Fog('#07040f', 14, 42);
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.12, 80);
    this.time = 0;
    this._portrait = false;
    this._stageShift = 0;

    const pmrem = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.08).texture;
    pmrem.dispose();

    this._buildBay();
    this.craft = createShip();
    this.craft.group.scale.setScalar(1.55);
    this.craft.group.position.set(0, 0.15, 0);
    this.scene.add(this.craft.group);

    this.key = new THREE.DirectionalLight(0xffe29a, 2.4);
    this.key.position.set(4.5, 6.5, 3.2);
    this.fill = new THREE.PointLight(0x5ce1ff, 18, 22, 2);
    this.fill.position.set(-4.2, 1.6, 2.4);
    this.rim = new THREE.PointLight(0xff3bd4, 16, 20, 2);
    this.rim.position.set(1.4, 2.2, -5.2);
    this.floorLight = new THREE.SpotLight(0x9be7ff, 18, 28, 0.7, 0.45, 1);
    this.floorLight.position.set(0, 8.5, 2);
    this.floorLight.target.position.set(0, 0, 0);
    this.scene.add(this.key, this.fill, this.rim, this.floorLight, this.floorLight.target);
    this.scene.add(new THREE.AmbientLight(0x1a1430, 0.55));

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.62, 0.55, 0.28);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.resize(window.innerWidth, window.innerHeight);
    this.setLoadout({ spark: 1 }, null);
  }

  _buildBay() {
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c0818,
      metalness: 0.88,
      roughness: 0.32,
      emissive: 0x12081c,
      emissiveIntensity: 0.4,
    });
    const floor = new THREE.Mesh(new THREE.CircleGeometry(9.5, 48), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.35;
    this.scene.add(floor);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(4.4, 0.045, 8, 48),
      new THREE.MeshBasicMaterial({ color: 0x5ce1ff, transparent: true, opacity: 0.55 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.32;
    this.scene.add(ring);
    this._ring = ring;

    const ring2 = ring.clone();
    ring2.scale.setScalar(1.35);
    ring2.material = new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.28 });
    this.scene.add(ring2);
    this._ring2 = ring2;

    const wall = new THREE.Mesh(
      new THREE.CylinderGeometry(11.5, 11.5, 10, 32, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0x090612,
        metalness: 0.7,
        roughness: 0.55,
        side: THREE.BackSide,
        emissive: 0x1a0a28,
        emissiveIntensity: 0.35,
      })
    );
    wall.position.y = 2.2;
    this.scene.add(wall);

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 7.2, 0.08),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0x5ce1ff : 0xff64e8 })
      );
      strip.position.set(Math.cos(a) * 10.6, 2.1, Math.sin(a) * 10.6);
      this.scene.add(strip);
    }

    const slit = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 0.55),
      new THREE.MeshBasicMaterial({ color: 0xffe29a, transparent: true, opacity: 0.35 })
    );
    slit.position.set(0, 6.4, -4);
    slit.rotation.x = 0.2;
    this.scene.add(slit);

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.7, 0.28, 24),
      new THREE.MeshStandardMaterial({
        color: 0x161022,
        metalness: 0.9,
        roughness: 0.22,
        emissive: 0x5ce1ff,
        emissiveIntensity: 0.35,
      })
    );
    pedestal.position.y = -1.22;
    this.scene.add(pedestal);
  }

  setLoadout(loadout, previewId = null) {
    dressShip(this.craft, loadout, previewId);
  }

  resize(w, h, stage = null, panel = null) {
    this._w = w;
    this._h = h;
    this._portrait = !!(panel && stage && panel.top > stage.bottom - 8);
    this.camera.aspect = w / Math.max(1, h);
    if (stage && w > 0 && h > 0) {
      const stageCenterX = stage.left + stage.width * 0.5;
      const stageCenterY = stage.top + stage.height * 0.5;
      const shiftX = w * 0.5 - stageCenterX;
      const shiftY = h * 0.5 - stageCenterY;
      this._stageShift = shiftX;
      this._stageShiftY = shiftY;
      this.camera.setViewOffset(w, h, shiftX, shiftY, w, h);
    } else {
      this._stageShift = 0;
      this._stageShiftY = 0;
      this.camera.clearViewOffset();
    }
    this.camera.updateProjectionMatrix();
    this.composer.setSize(w, h);
    this.bloom.setSize(w, h);
    this.craft.group.scale.setScalar(this._portrait ? 1.38 : 1.72);
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    this.craft.group.rotation.y += dt * 0.32;
    this.craft.rig.rotation.z = Math.sin(t * 0.7) * 0.045;
    this.craft.rig.rotation.x = Math.sin(t * 0.45) * 0.03;
    this.craft.group.position.y = 0.15 + Math.sin(t * 0.9) * 0.08;
    if (this._ring) this._ring.rotation.z = t * 0.12;
    if (this._ring2) this._ring2.rotation.z = -t * 0.08;
    this.fill.intensity = 16 + Math.sin(t * 1.4) * 3;
    this.rim.intensity = 14 + Math.cos(t * 1.1) * 3;
    if (this.craft.exhausts) {
      for (const ex of this.craft.exhausts) {
        ex.scale.setScalar(0.85 + Math.sin(t * 8 + ex.position.x) * 0.18);
      }
    }
    if (this._portrait) {
      this.camera.position.set(0.35, 1.85, 9.8);
      this.camera.lookAt(0, 0.12, 0);
    } else {
      this.camera.position.set(2.6, 1.55, 7.4);
      this.camera.lookAt(0, 0.12, 0);
    }
  }

  render() {
    this.composer.render();
  }
}
