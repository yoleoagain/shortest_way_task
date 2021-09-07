export interface VertexT {
  x: number
  y: number
  nearest: VertexT[]
  render: () => void
}

export interface VertexOptions {
  ctx: CanvasRenderingContext2D
  x: number
  y: number
  r?:  number
  nearest?: VertexT[]
}

export function Vertex({ ctx, x = 0, y = 0, r = 25, nearest = [] } : VertexOptions){
  this.x = x
  this.y = y
  this.r = r
  this.nearest = nearest

  this.render = () => {
    console.log('ctx VERTEX', ctx)
    ctx.beginPath()
    ctx.arc(this.x, this.y, r, 0, 2 * Math.PI, false)
    ctx.fillStyle = '#976740'
    ctx.fill()
    ctx.lineWidth = 0
    ctx.strokeStyle = '#222230'
    ctx.stroke()
  }

  this.render()
}