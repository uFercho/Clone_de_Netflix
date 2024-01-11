export interface State {
  loading: boolean;
  shows:   SmallShow[];
}

export interface StateShowByQuery {
  loading: boolean;
  shows:   SmallShow[];
}

export interface ShowByQuery {
  score: number;
  show:  Show;
}

export interface SmallShow {
  id:             number;
  name:           string;
  type:           ShowType;
  genres:         ShowGenre[];
  runtime:        number | null;
  premiered:      string;
  rating:         ShowRating;
  image:          ShowImage;
}

export interface Show {
  id:             number;
  url:            string;
  name:           string;
  type:           ShowType;
  language:       ShowLanguage;
  genres:         ShowGenre[];
  status:         ShowStatus;
  runtime:        number | null;
  averageRuntime: number;
  premiered:      string;
  ended:          Date | null;
  officialSite:   null | string;
  schedule:       ShowSchedule;
  rating:         ShowRating;
  weight:         number;
  network:        ShowNetwork | null;
  webChannel:     ShowNetwork | null;
  dvdCountry:     ShowCountry | null;
  externals:      ShowExternals;
  image:          ShowImage;
  summary:        string;
  updated:        number;
  _links:         ShowLinks;
  _embedded:      Embedded;
}

export interface ShowLinks {
  self:            ShowLinksNextepisode;
  previousepisode: ShowLinksNextepisode;
  nextepisode?:    ShowLinksNextepisode;
}

export interface ShowLinksNextepisode {
  href: string;
}

export interface ShowCountry {
  name:     ShowCountryName;
  code:     ShowCountryCode;
  timezone: ShowCountryTimezone;
}

export enum ShowCountryCode {
  CA = "CA",
  De = "DE",
  Fr = "FR",
  GB = "GB",
  Jp = "JP",
  Us = "US",
}

export enum ShowCountryName {
  Canada = "Canada",
  France = "France",
  Germany = "Germany",
  Japan = "Japan",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}

export enum ShowCountryTimezone {
  AmericaHalifax = "America/Halifax",
  AmericaNewYork = "America/New_York",
  AsiaTokyo = "Asia/Tokyo",
  EuropeBusingen = "Europe/Busingen",
  EuropeLondon = "Europe/London",
  EuropeParis = "Europe/Paris",
}

export interface ShowExternals {
  tvrage:  number;
  thetvdb: number | null;
  imdb:    null | string;
}

export enum ShowGenre {
  Action = "Action",
  Adventure = "Adventure",
  Anime = "Anime",
  Comedy = "Comedy",
  Crime = "Crime",
  Drama = "Drama",
  Espionage = "Espionage",
  Family = "Family",
  Fantasy = "Fantasy",
  History = "History",
  Horror = "Horror",
  Legal = "Legal",
  Medical = "Medical",
  Music = "Music",
  Mystery = "Mystery",
  Romance = "Romance",
  ScienceFiction = "Science-Fiction",
  Sports = "Sports",
  Supernatural = "Supernatural",
  Thriller = "Thriller",
  War = "War",
  Western = "Western",
}

export interface ShowImage {
  medium:   string;
  original: string;
}

export enum ShowLanguage {
  English = "English",
  Japanese = "Japanese",
}

export interface ShowNetwork {
  id:           number;
  name:         string;
  country:      ShowCountry | null;
  officialSite: null | string;
}

export interface ShowRating {
  average: number | null;
}

export interface ShowSchedule {
  time: ShowScheduleTime;
  days: ShowScheduleDay[];
}

export enum ShowScheduleDay {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

export enum ShowScheduleTime {
  Empty = "",
  The0900 = "09:00",
  The1200 = "12:00",
  The1300 = "13:00",
  The2000 = "20:00",
  The2030 = "20:30",
  The2100 = "21:00",
  The2130 = "21:30",
  The2200 = "22:00",
  The2230 = "22:30",
  The2300 = "23:00",
  The2330 = "23:30",
}

export enum ShowStatus {
  Ended = "Ended",
  Running = "Running",
  ToBeDetermined = "To Be Determined",
}

export enum ShowType {
  Animation = "Animation",
  Documentary = "Documentary",
  Reality = "Reality",
  Scripted = "Scripted",
  TalkShow = "Talk Show",
}

export interface Embedded {
  episodes: EmbeddedEpisode[];
  cast:     EmbeddedCast[];
}

export interface EmbeddedEpisode {
  id:       number;
  url:      string;
  name:     string;
  season:   number;
  number:   number;
  type:     EmbeddedEpisodeType;
  airdate:  Date;
  airstamp: Date;
  runtime:  number;
  rating:   ShowRating;
  image:    ShowImage;
  summary:  string;
  _links:   ShowLinks;
}

export enum EmbeddedEpisodeType {
  Regular = "regular",
}

export interface EmbeddedCast {
    person:    EmbeddedCastPerson;
    character: EmbeddedCastCharacter;
    self:      boolean;
    voice:     boolean;
}



export interface EmbeddedCastPerson {
  id:       number;
  url:      string;
  name:     string;
  country:  ShowCountry | null;
  birthday: Date | null;
  deathday: null;
  gender:   EmbeddedCastPersonGender | null;
  image:    ShowImage | null;
  updated:  number;
  _links:   ShowLinks;
}

export enum EmbeddedCastPersonGender {
  Female = "Female",
  Male = "Male",
}

export interface EmbeddedCastCharacter {
    id:     number;
    url:    string;
    name:   string;
    image:  ShowImage | null;
    _links: ShowLinks;
}


