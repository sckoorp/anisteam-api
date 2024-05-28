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