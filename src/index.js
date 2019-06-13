import { interval, of } from "rxjs";
import { delay, exhaustMap } from "rxjs/operators";

const subscription = interval(500)
  .pipe(exhaustMap(a => of(a).pipe(delay(1000))))
  .subscribe(console.log);

window.addEventListener("unload", subscription.unsubscribe);
