export class CounterService {
static count = 0;

onChange() {
  CounterService.count = CounterService.count + 1;
  console.log(CounterService.count);
}
}
