export interface ColourType {
    main: string
    mute: string
}

export interface CategoryType {
    name: string;
    uniqueName: string; // this will serve as the id
    colour: ColourType;
}

// TODO update categories to include a colour and an icon maybe idk