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
  i: number
  nearest?: VertexT[]
}

export function Vertex({ ctx, x = 0, y = 0, i, r = 25, nearest = [] } : VertexOptions){
  this.x = x
  this.y = y
  this.r = r
  this.i = i

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
    ctx.fillStyle = '#5555'
    ctx.textBaseline = 'top'
    ctx.font = '16px serif'
    ctx.fillText(String(this.i), this.x, this.y)
  }

  this.render()
}