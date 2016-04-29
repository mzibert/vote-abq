import {Component, OnInit} from "angular2/core";
import {VotingService} from "./voting.service";
import {Voting} from "./voting";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from "angular2-google-maps/core";

@Component({
	selector: "voting-list",
	templateUrl: "app/templates/voting-list.html",
	directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES]
})

export class VotingList implements OnInit {
	constructor(private votingService: VotingService) {}

	votingMap = {};
	errorMessage: string;
	votingList: Voting[];
	votingCenter = {};

	ngOnInit() {
		this.getVoting();
	}

	getVoting() {
		this.votingService.getVoting()
			.subscribe(
				voting => {
					this.votingList = voting;
					this.calculateCenter();
				},
				error => this.errorMessage = error
			);
	}

	calculateCenter() {
		let votingLat = 0.0;
		let votingLong = 0.0;

		this.votingList.forEach(function(voting) {
			votingLat = votingLat + voting.lat;
			votingLong = votingLong + voting.long;
		});
		votingLat = votingLat / this.votingList.length;
		votingLong = votingLong / this.votingList.length;
		this.votingCenter = {lat: votingLat, lng: votingLong};
	}
}