const userKey = "AuthUser";

export class User {
    token: string;
    exp: Date;
    constructor(token: string, exp: Date) {
        this.token = token;
        this.exp = exp;
    }

    static FromObject(obj: any): User {
        const token = obj.token;
        const exp = new Date(obj.exp)
        return new User(token, exp);
    }

    /**
     * 사용자 유효성 체크. 만료시간을 확인한다.
     * @returns 
     */
    public validate(): boolean {
        return Date.now() < this.exp.getTime();
    }
}

export const useAuth: () => [User | null, (user: User | null) => void] = () => {
    const userText = localStorage.getItem(userKey);
    const setUser = (user: User | null) => {
        if (user) {
            const json = JSON.stringify(user);
            localStorage.setItem(userKey, json);
        }
        else
            localStorage.removeItem(userKey);
    };

    if (!userText)
        return [null, setUser];
    const user = User.FromObject(JSON.parse(userText));
    return [user, setUser];
};