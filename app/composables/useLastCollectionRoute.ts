export function useLastCollectionRoute() {
  return useState<string>('last-collection-route', () => '/dictionary');
}
