import { extend } from './Helpers'

export default class RequestInitGenerator {

	private getJsonHeader(headerExtension: object): object {
		var header = { 'Content-Type': 'application/json' };
		extend(header, headerExtension);
		return new Headers(header);
	}

	get(headerExtension: object): RequestInit {
		return <RequestInit>{
			method: 'GET',
			headers: this.getJsonHeader(headerExtension)
		};
	}

	put(object: Object, headerExtension: Object): RequestInit {
		return <RequestInit>{
			method: 'PUT',
			headers: this.getJsonHeader(headerExtension),
			body: JSON.stringify(object)
		};
	}

	post(object: Object, headerExtension: Object): RequestInit {
		return <RequestInit>{
			method: 'POST',
			headers: this.getJsonHeader(headerExtension),
			body: JSON.stringify(object)
		};
	}

	delete(headerExtension: Object): RequestInit {
		return <RequestInit>{
			method: 'DELETE',
			headers: this.getJsonHeader(headerExtension)
		};
	}

	postFile(file: File, headerExtension: Object): RequestInit {
		var data = new FormData();
		data.append('file', file);
		return <RequestInit>{
			method: 'POST',
			headers: new Headers(headerExtension),
			body: data
		};
	}

	getFile(headerExtension: Object): RequestInit {
		return <RequestInit>{
			method: 'GET',
			headers: new Headers(headerExtension)
		};
	}
}
