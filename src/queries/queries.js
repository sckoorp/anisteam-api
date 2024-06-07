export const SpotlightQuery =
    () => `query {
        Page(page: 1, perPage: 12) {
            media(type: ANIME, sort: [TRENDING_DESC, POPULARITY_DESC]) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                bannerImage
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
            }
        }
    }`

export const TrendingQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, sort: TRENDING_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
                studios(isMain: true) {
                    nodes {
                      name
                    }
                }
                genres
            }
        }
    }`

export const PopularQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, sort: POPULARITY_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
                studios(isMain: true) {
                    nodes {
                      name
                    }
                }
                genres
            }
        }
    }`

export const UpcomingQuery =
    (page, per, season) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, sort: POPULARITY_DESC, season: ${season}, seasonYear: ${new Date().getFullYear()}) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
                studios(isMain: true) {
                    nodes {
                      name
                    }
                }
                genres
            }
        }
    }`

export const FavoriteQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, sort: FAVOURITES_DESC) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
                studios(isMain: true) {
                    nodes {
                      name
                    }
                }
                genres
            }
        }
    }`

export const MoviesQuery =
    (page, per) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, sort: POPULARITY_DESC, format: MOVIE) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
                studios(isMain: true) {
                    nodes {
                      name
                    }
                }
                genres
            }
        }
    }`

export const InfoQuery =
    (id) => `query {
        Media(id: ${id}, type: ANIME, sort: FAVOURITES_DESC) {
            id
            title {
                romaji
            }
            coverImage {
                extraLarge
            }
            format
            seasonYear
            averageScore
            episodes
            description(asHtml: true)
            studios(isMain: true) {
                nodes {
                  name
                }
            }
            genres
            recommendations(page: 1, perPage: 5) {
                nodes {
                    mediaRecommendation {
                        id
                        title {
                            romaji
                        }
                        coverImage {
                            extraLarge
                        }
                        format
                        seasonYear
                        averageScore
                        episodes
                        description(asHtml: true)
                        studios(isMain: true) {
                            nodes {
                                name
                            }
                        }
                        genres
                    }
                }
            }
        }
    }`

export const SearchQuery =
    (page, per, q) => `query {
        Page(page: ${page}, perPage: ${per}) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ANIME, search: "${q}") {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                }
                format
                seasonYear
                averageScore
                episodes
                description(asHtml: true)
                studios(isMain: true) {
                    nodes {
                      name
                    }
                }
                genres
            }
        }
    }`