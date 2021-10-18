declare module '*.scss' {
    const mapping: Record<string, string>;
    export default mapping;
}

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    const value: any;
    export default value;
}

declare module 'preact-google-recaptcha' {}
