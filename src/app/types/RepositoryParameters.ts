export default class RepositoryParameters {

	private _repository: string;
	private _owner: string;

	constructor(owner: string, repository: string) {
		this._owner = owner;
		this._repository = repository;
	}

	get repository() {
		return this._repository;
	}

	get owner() {
		return this._owner;
	}
}