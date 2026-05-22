/**
 * A cross-platform (OSX, Windows, Linux) path to the user's home.
 */
declare function userhome(...paths: string[]): string;

export = userhome;
