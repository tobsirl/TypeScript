// const beforeLoad = 'beforeLoad';
// const loading = 'loading';
// const loaded = 'loaded';

enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading = 'loading',
  loaded = 'loaded',
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: 'Before Load',
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

isLoading(LoadingState.beforeLoad); //?

// Literal Types
function rollDice(dice: number): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

rollDice(4); //?
