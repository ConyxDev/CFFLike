export type Root = Root2[]

export interface Root2 {
  label: string
  fav?: number
  iconclass: string
  html: string
}
export interface RootConnection {
    count: number
    min_duration: number
    rawtime: number
    max_duration: number
    maxtime: number
    connections: Connection[]
    url: string
    points: Point[]
    description: string
    request: any
    eof: number
  }
  
  export interface Connection {
    duration: number
    from: string
    departure: string
    to: string
    arrival: string
    is_main?: boolean
    occupancy: string
    legs: Leg[]
    disruptions?: Disruptions
  }
  
  export interface Leg {
    departure?: string
    tripid?: string
    stopid: string
    x: number
    y: number
    name: string
    sbb_name: string
    type?: string
    line?: string
    terminal?: string
    fgcolor?: string
    bgcolor?: string
    "*G"?: string
    "*L"?: string
    "*Z"?: string
    operator?: string
    stops?: Stop[]
    contop_stop: any
    runningtime?: number
    exit?: Exit
    occupancy?: string
    track?: string
    attributes?: Attributes
    disruptions: any
    type_name?: string
    lon: number
    lat: number
    arrival?: string
    normal_time?: number
  }
  
  export interface Stop {
    arrival: string
    departure: string
    occupancy: string
    name: string
    stopid: string
    x: number
    y: number
    lon: number
    lat: number
  }
  
  export interface Exit {
    arrival: string
    stopid: string
    x: number
    y: number
    name: string
    sbb_name: string
    track: string
    lon: number
    lat: number
  }
  
  export interface Attributes {
    "0_1.4_WR"?: string
    "0_4.8_RZ"?: string
    "0_8.1_R"?: string
    "1_4.6_FA"?: string
    "1_4.7_BZ": string
    "1_4.7_FS": string
  }
  
  export interface Disruptions {
    "ch:1:sstid:100001:2369a78b-7324-4ea5-a9fb-bd3271333942_1": Ch1Sstid1000012369a78b73244ea5A9fbBd32713339421
  }
  
  export interface Ch1Sstid1000012369a78b73244ea5A9fbBd32713339421 {
    id: string
    perspective: string[]
    periods: Periods
    texts: Texts
    Progress: string
    AlertCause: string
    Priority: string
    type: string
  }
  
  export interface Periods {
    validity: number[][]
    publication: number[][]
  }
  
  export interface Texts {
    S: S
    M: M
    L: L
  }
  
  export interface S {
    summary: string
    duration: string
  }
  
  export interface M {
    summary: string
    duration: string
  }
  
  export interface L {
    summary: string
    duration: string
  }
  
  export interface Point {
    id: string
    text: string
    url: string
    x: string
    y: string
    lon: number
    lat: number
  }
  