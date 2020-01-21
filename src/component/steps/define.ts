export interface StepInterface {
    readonly length: number;

    addStep(step: StepItemInterface): void;
}

export type StepItemStatus = "finished" | "current" | "wait";

export interface StepItemInterface {
    status?: StepItemStatus;
    icon?: string;
    title?: string;
    desc?: string;
    index?: number;
}
