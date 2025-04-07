export interface Interface {
    connections: Connection[];
}

export interface Connection {
    duration:  number;
    from:      string;
    departure: Date;
    to:        string;
    arrival:   Date;
    is_main:   boolean;
    occupancy: string;
    legs:      Leg[];
}

export interface Leg {
    departure?:   Date;
    tripid?:      string;
    stopid:       string;
    x:            number;
    y:            number;
    name:         string;
    sbb_name:     string;
    type?:        string;
    line?:        string;
    terminal?:    string;
    fgcolor?:     string;
    bgcolor?:     string;
    "*G"?:        string;
    "*Z"?:        string;
    operator?:    string;
    stops:        Exit[] | null;
    contop_stop:  null;
    runningtime?: number;
    exit?:        Exit;
    occupancy?:   string;
    track?:       string;
    attributes?:  Attributes;
    disruptions?: any[];
    type_name?:   string;
    lon:          number;
    lat:          number;
    arrival?:     Date;
    normal_time?: number;
}

export interface Attributes {
    "1_4.6_FZ": string;
    "1_4.7_BZ": string;
    "1_4.7_FS": string;
}

export interface Exit {
    arrival:    Date;
    stopid:     string;
    x:          number;
    y:          number;
    name:       string;
    sbb_name?:  string;
    track?:     string;
    lon:        number;
    lat:        number;
    departure?: Date;
    occupancy?: string;
}

