interface ClassToggles {
    [K: string]: boolean;
}
declare const scopedClassMaker: (prefix: string) => (name: string | ClassToggles, extra?: string | undefined) => string;
export { scopedClassMaker };
