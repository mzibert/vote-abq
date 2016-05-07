import {Component} from "angular2/core";
import {VotingList} from "./voting-list";
import {HTTP_PROVIDERS} from "angular2/http";
import {VotingService} from "./voting.service";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
	selector: "vote-abq",
	templateUrl: "app/templates/splash-page.html",
	directives: [VotingList],
	providers: [HTTP_PROVIDERS, VotingService]
})
@RouteConfig([
	{path: "/", name: "VoteAbqSplash", component: VoteAbq},
	{path: "voting/:id", name: "VoteAbqDetail", component: VotingList}
])
export class VoteAbq {}