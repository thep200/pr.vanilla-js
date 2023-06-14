import { of } from 'rxjs';
import { map } from 'rxjs/operators';

map(x => x + 1)(of (1, 2, 3, 4, 5)).subscribe((v) => console.log('v: ', v))
