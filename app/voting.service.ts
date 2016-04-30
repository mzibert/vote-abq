import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Voting} from "./voting";

@Injectable()
export class VotingService {
	constructor(private http: Http) {}

	private votingUrl = "https://bootcamp-coders.cnm.edu/~dmcdonald21/vote-abq-api/";

	getVoting() : Observable<Voting[]> {
		return(this.http.get(this.votingUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status));
		}

		let reply = [];
		let body = response.json();
		body.features.forEach(function(item) {
			let attributes = item.attributes;
			let voting = {id: attributes.OBJECTID, name: attributes.name, address: attributes.address, zip: attributes.ZIP, description: attributes.locationDescription, lat: attributes.Lat, long: attributes.Long};
			reply.push(voting);
		});
		return(reply);
	}

	private handleError(error: any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}