export class Item {
    constructor(
        public id: number = 8,
        public name: string = '',
        public description: string = '',
        public price: number = 20,
        public currency: string = '',
        public available: boolean = true,
        public img: string = ''
    ) {}
}
