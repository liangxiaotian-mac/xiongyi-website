declare module "wowjs" {
  export class WOW {
    constructor(options?: { boxClass?: string; animateClass?: string; live?: boolean });
    init(): void;
  }
}

declare module "wowjs/dist/wow";
