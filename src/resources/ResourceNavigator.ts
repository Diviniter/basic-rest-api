import UrlNavigator from '../helpers/UrlNavigator'
import Resource from './Resource'
import FileResource from './FileResource'

export default class ResourceNavigator {

	constructor(private url: UrlNavigator) { }

	resource<T extends Entity>(resourceName: string): Resource<T> {
		return new Resource<T>(this.url.addResource(resourceName));
	}

	fileResource<T extends Entity>(resourceName: string): FileResource<T> {
		return new FileResource<T>(this.url.addResource(resourceName));
	}

}
