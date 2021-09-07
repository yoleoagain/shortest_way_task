import { CreateScene } from './scene'

const canvas = document.getElementById('canvas')

if (canvas){
  //@ts-ignore
  const scene = new CreateScene(canvas)
}
