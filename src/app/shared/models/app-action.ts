/**
 * Created by bothmena on 12/06/17.
 */

export class AppAction {

    type: string;
    data?: any[];

    constructor( action: string, body: any[] = [] ) {
        this.type = action;
        this.data   = body;
    }
}
