import {Component, OnInit} from "angular2/core";
import {VotingService} from "./voting.service";
import {Voting} from "./voting";

@Component({
	selector: "voting-list",
	templateUrl: "app/templates/voting-list.html"
})

export class VotingList implements OnInit {
	constructor(private votingService: VotingService) {}

	errorMessage: string;
	votingList: Voting[];

	ngOnInit() {
		this.getVoting();
	}

	getVoting() {
		this.votingService.getVoting()
			.subscribe(
				voting => this.votingList = voting,
				error => this.errorMessage = error
			);
	}
}