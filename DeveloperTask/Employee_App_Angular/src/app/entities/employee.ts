export class Employee {

    public id: number;
	public name: string;
	public phoneNumber: string;
	public supervisor: string;

	constructor(id: number, name: string, phoneNumber: string, supervisor: string) {
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.supervisor = supervisor;
	}
}
