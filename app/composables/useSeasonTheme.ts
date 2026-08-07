type SeasonName = 'spring' | 'summer' | 'autumn' | 'winter';
type SeasonOverride = 'auto' | SeasonName;

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

export function useSeasonTheme() {
  const seasonOverride = useState<SeasonOverride>('season-theme-override', () => 'auto');
  const autoSeason = computed<SeasonName>(() => resolveSeasonByDate(new Date()));
  const activeSeason = computed<SeasonName>(() => {
    return seasonOverride.value === 'auto' ? autoSeason.value : seasonOverride.value;
  });
  const activeOption = computed<SeasonThemeOption>(() => {
    return seasonThemeOptions.find((option) => option.key === seasonOverride.value) ?? {
      key: 'auto',
      label: 'Авто',
      note: 'По текущей дате'
    };
  });

  function setSeasonOverride(nextValue: SeasonOverride): void {
    seasonOverride.value = nextValue;
  }

  return {
    activeOption,
    activeSeason,
    autoSeason,
    seasonOverride,
    seasonThemeOptions,
    setSeasonOverride
  };
}
