import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Voting} from "./voting";

@Injectable()
export class VotingService {
	constructor(private http: Http) {}

	private votingUrl = "http://coagisweb.cabq.gov/arcgis/rest/services/public/Voting2015/MapServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&f=json";

	getVoting() : Observable<Voting[]> {
		return(this.http.get(this.votingUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}

	private extractData(response: Response) {
		if(response.status < 200 || response.status >= 300) {
			throw(new Error("Bad response status: " + response.status));
		}

		let body = response.json();
		console.log(body);
		return(body);
	}

	private handleError(error: any) {
		let message = error.message;
		console.log(message);
		return(Observable.throw(message));
	}
}