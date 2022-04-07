declare module 'electron-first-run' {
    const firstRun: {
      (opts?: { name: string }): boolean;

      clear: (opts?: { name: string }) => void;
    };

    export default firstRun;
}
