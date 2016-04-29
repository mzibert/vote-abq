import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import "rxjs/Rx";
import {VoteAbq} from "./app.vote-abq";
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from "angular2-google-maps/core";

bootstrap(VoteAbq, [ANGULAR2_GOOGLE_MAPS_PROVIDERS]);