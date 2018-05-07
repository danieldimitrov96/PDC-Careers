export class AppConfig {
    public readonly apiUrl: string;
    public readonly timeOutAnimation = 500;

    constructor() {
        this.apiUrl = 'http://localhost:3001/api';
    }
}
