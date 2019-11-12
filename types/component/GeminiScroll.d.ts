interface GeminiScrollBaseConfig {
    forceGemini?: boolean;
    autoShow?: boolean;
    enableHor?: boolean;
    enableVer?: boolean;
    offsetX?: number;
    offsetY?: number;
    minThumbSize?: number;
}

export interface GeminiScrollbarConfig extends GeminiScrollBaseConfig {
    element: HTMLElement;
}

export declare class GeminiScrollD {
    constructor(config: GeminiScrollbarConfig);

    public create(this: GeminiScrollD): void;

    public update(this: GeminiScrollD): void;

    public destroy(): void;
}
