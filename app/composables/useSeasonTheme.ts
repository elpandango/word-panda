type SeasonName = 'spring' | 'summer' | 'autumn' | 'winter';
type SeasonOverride = 'auto' | SeasonName;
type SeasonAccent =
  'none' | 'spring-blossom' | 'summer-bamboo' | 'autumn-leaves' | 'winter-holiday';

interface SeasonThemeOption {
  key: SeasonOverride;
  label: string;
  note: string;
}

const seasonThemeOptions: SeasonThemeOption[] = [
  {
    key: 'auto',
    label: 'Авто',
    note: 'По текущей дате'
  },
  {
    key: 'spring',
    label: 'Весна',
    note: 'Свежий и мягкий'
  },
  {
    key: 'summer',
    label: 'Лето',
    note: 'Теплый и ясный'
  },
  {
    key: 'autumn',
    label: 'Осень',
    note: 'Чайный и собранный'
  },
  {
    key: 'winter',
    label: 'Зима',
    note: 'Прохладный и тихий'
  }
];

function resolveSeasonByDate(date: Date): SeasonName {
  const month = date.getMonth();

  if (month >= 2 && month <= 4) {
    return 'spring';
  }

  if (month >= 5 && month <= 7) {
    return 'summer';
  }

  if (month >= 8 && month <= 10) {
    return 'autumn';
  }

  return 'winter';
}

function resolveAccentByDate(date: Date): SeasonAccent {
  const month = date.getMonth();

  if (month === 2 || month === 3) {
    return 'spring-blossom';
  }

  if (month >= 5 && month <= 7) {
    return 'summer-bamboo';
  }

  if (month === 8 || month === 9) {
    return 'autumn-leaves';
  }

  if (month === 11) {
    return 'winter-holiday';
  }

  return 'none';
}

export function useSeasonTheme() {
  const seasonOverride = useState<SeasonOverride>('season-theme-override', () => 'auto');
  const autoSeason = computed<SeasonName>(() => resolveSeasonByDate(new Date()));
  const autoAccent = computed<SeasonAccent>(() => resolveAccentByDate(new Date()));
  const activeSeason = computed<SeasonName>(() => {
    return seasonOverride.value === 'auto' ? autoSeason.value : seasonOverride.value;
  });
  const activeAccent = computed<SeasonAccent>(() => {
    if (seasonOverride.value === 'auto') {
      return autoAccent.value;
    }

    if (seasonOverride.value === 'spring') {
      return 'spring-blossom';
    }

    if (seasonOverride.value === 'autumn') {
      return 'autumn-leaves';
    }

    if (seasonOverride.value === 'summer') {
      return 'summer-bamboo';
    }

    if (seasonOverride.value === 'winter') {
      return 'winter-holiday';
    }

    return 'none';
  });
  const activeOption = computed<SeasonThemeOption>(() => {
    return (
      seasonThemeOptions.find((option) => option.key === seasonOverride.value) ?? {
        key: 'auto',
        label: 'Авто',
        note: 'По текущей дате'
      }
    );
  });

  function setSeasonOverride(nextValue: SeasonOverride): void {
    seasonOverride.value = nextValue;
  }

  return {
    activeOption,
    activeAccent,
    activeSeason,
    autoAccent,
    autoSeason,
    seasonOverride,
    seasonThemeOptions,
    setSeasonOverride
  };
}
