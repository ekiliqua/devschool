export class Item {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public currency: string,
        public available: boolean,
        public img: string
    ) {}
}