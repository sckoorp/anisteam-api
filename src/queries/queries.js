export const TrendingQuery =
    (page, perPage) => `query {
        Page(page: ${page}, perPage: ${perPage}) {
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
    (page, perPage) => `query {
        Page(page: ${page}, perPage: ${perPage}) {
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
    (page, perPage, season) => `query {
        Page(page: ${page}, perPage: ${perPage}) {
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
    (page, perPage) => `query {
        Page(page: ${page}, perPage: ${perPage}) {
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
    (page, perPage) => `query {
        Page(page: ${page}, perPage: ${perPage}) {
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