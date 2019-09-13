
export interface Direction {label: string, values: number[]}

const Directions: Direction[] = [
    {label: 'N', values: [1,0]},
    {label: 'E', values: [0,1]},
    {label: 'S', values: [-1,0]},
    {label: 'W', values: [0,-1]},
]

export default Directions;