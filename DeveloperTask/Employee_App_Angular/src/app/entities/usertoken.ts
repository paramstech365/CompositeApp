export class Usertoken {
    public username: string;
	public jwtToken: string;

	constructor(username: string, jwtToken: string) {
		this.username = username;
		this.jwtToken = jwtToken;
	}
}
