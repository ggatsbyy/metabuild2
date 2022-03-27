import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(16, 1.5, 11.5),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
videoStream.addComponentOrReplace(transform2)

const woodenTabernacleRoundTable = new Entity('woodenTabernacleRoundTable')
engine.addEntity(woodenTabernacleRoundTable)
woodenTabernacleRoundTable.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(3.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenTabernacleRoundTable.addComponentOrReplace(transform3)
const gltfShape = new GLTFShape("a4dddfe5-698d-41c4-bbb2-fcceabe88d7d/Table_01/Table_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
woodenTabernacleRoundTable.addComponentOrReplace(gltfShape)

const woodenThrone = new Entity('woodenThrone')
engine.addEntity(woodenThrone)
woodenThrone.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(5.5, 0, 3),
  rotation: new Quaternion(-3.2851078069173712e-15, -0.8819212913513184, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
woodenThrone.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("23540a6e-eb8c-4866-9bf6-563b75dc83a8/WoodBigChair_01/WoodBigChair_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
woodenThrone.addComponentOrReplace(gltfShape2)

const woodenThrone2 = new Entity('woodenThrone2')
engine.addEntity(woodenThrone2)
woodenThrone2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(12, 0, 13),
  rotation: new Quaternion(4.124684534895229e-15, -0.8819212913513184, 1.0513320347627086e-7, -0.4713967740535736),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
woodenThrone2.addComponentOrReplace(transform5)
woodenThrone2.addComponentOrReplace(gltfShape2)

const scriptorium = new Entity('scriptorium')
engine.addEntity(scriptorium)
scriptorium.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.5, 0, 12.5),
  rotation: new Quaternion(-1.3864135754287086e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
scriptorium.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("54d93298-8dc5-4cfc-8974-08e7ce262fa4/PapyrusDesk_01/PapyrusDesk_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
scriptorium.addComponentOrReplace(gltfShape3)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape4 = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
entity.addComponentOrReplace(gltfShape4)
const transform7 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform7)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"onActivate":[{"entityName":"videoStream","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoStream","actionId":"activate","values":{}}]}, createChannel(channelId, videoStream, channelBus))