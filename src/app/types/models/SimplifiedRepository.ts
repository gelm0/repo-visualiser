export interface ISimplifiedRepository {
		name: string;
		private: boolean;
		language: string;
		created_at: Date;
		updated_at: Date;
		pushed_at: Date;
		size: number;
}

export default class SimplifiedRepository {
		private name: string;
		private private: boolean;
		private language: string;
		private createdAt: Date;
		private updatedAt: Date;
		private pushedAt: Date;
		private size: number;

		constructor(json: ISimplifiedRepository) {
				this.name = json.name;
				this.language jon.language;
				this.private = JSON.parse(json.private);
				this.createdAt = new Date(json.created_at);
				this.updatedAt = new Date(json.updated_at);
				this.pushedAt = new Date(json.pushed_at);
				this.size = json.size;
		}
}