/**
 *
 * @param selector - Query selector
 */
import { Vertex, VertexT } from './vertex'
import {randInt, range} from './utils';

type SceneObject = VertexT
type SceneContext = {
    elements: SceneObject[]
    pointsCountINPUT: HTMLElement
    pointsCount: number
    ctx: CanvasRenderingContext2D
    render: () => void
    clear: () => void
}

export function CreateScene(this: SceneContext, canvas: HTMLCanvasElement):SceneContext{
    if (!canvas) return null

    const ctx = canvas.getContext('2d')
    this.elements = []
    this.ctx = this.ctx

    /* Create scene */

    this.clear = () => {
        ctx.fillStyle = '#555555'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    this.clear()
    this.pointsCountINPUT = document.getElementById('points_count')
    //@ts-ignore
    this.pointsCount = this.pointsCountINPUT.value

    this.render = () => {
        this.clear()
        const rand = () => {
            const v = Math.abs(Math.random()) + 2
            return v
        }
        const vertexes = range(this.pointsCount)
          //@ts-ignore
          .map(i => new Vertex({
            x: randInt(0, canvas.width), y: randInt(0, canvas.height), i, r: 20, ctx }
        ))
        this.elements = [...vertexes]
        this.elements.forEach(e => { e.render() })
    }

    this.pointsCountINPUT.oninput = (e) => {
        //@ts-ignore
        this.pointsCount = Number(e.target.value)
        this.render()
    }

    const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        this.render()
    }

    window.addEventListener('resize', resizeCanvas, false);

    window.onload = () => { resizeCanvas() }

    this.render()
}