import { useDateFormat, useNow } from '@vueuse/core'

const dataset = [
  {
    slug: 'march-show',
    date: '2024-03-14',
  },
  {
    slug: 'marcus-anderson',
    title: 'Marcus Anderson',
    subtitle: 'World Renowned Saxaphonist',
    image: 'cover_marcus_anderson.jpeg',
    date: '2024-02-15',
    highlight: 'v1_s-X8d8Co',
    bio: '',
    social: {
      twitter: 'https://twitter.com/mandersonsax',
      instagram: 'https://www.instagram.com/mandersonsax',
      facebook: 'https://www.facebook.com/mandersonsax',
      spotify: 'https://open.spotify.com/artist/74w7jlHFeZ4x6cHFaHfHtf',
      linktree: 'https://linktr.ee/mandersonsax2023?utm_source=linktree_admin_share'
    },
    artistImage: 'https://www.legere.com/wp-content/uploads/Legere-Reeds-Marcus-Anderson-1.jpg',
  },
  {
    slug: 'alex-bugnon',
    title: 'Alex Bugnon',
    image: 'cover_alex_bugnon.jpeg',
    date: '2024-01-17',
    highlight: 'ooA2ESfzEHo?si=abFrPpuhrz1QVbZF',
    bio: '',
    social: {
      twitter: 'https://twitter.com/alexbugnon',
      instagram: 'https://www.instagram.com/alexbugnon/?hl=en'
    },
  },
  {
    slug: 'kirk-whalum',
    title: 'Kirk Whalum',
    image: 'cover_kurt_whalum.png',
    date: '2023-12-20',
    highlight: '1SIyPCHpPPI?si=wOFWt4T4qigW85jq',
    bio: '',
    social: {
      twitter: 'https://twitter.com/KirkWhalum',
      instagram: 'https://www.instagram.com/kirkwhalum/?hl=en',
      facebook: 'https://www.facebook.com/KirkWhalum',
      spotify: 'https://open.spotify.com/artist/6v2VjBVPcGVbBqJrUWYiG1?si=lb1ub_DNSZG7PM5FnzSvHg&nd=1&dlsi=adc69645660a435e',
      linktree: 'https://linktr.ee/kirkwhalum'
    },
    artistImage: 'https://images.squarespace-cdn.com/content/v1/5a4ce01faeb625bdfcc0e2bb/fa9c164d-a65a-438a-b887-449a8e308504/Kirk%2BWhalum.jpg',
    media: {
      prefix: '',
      images: [
        'v1705205201/raleigh/2023-12/RLC_2647_Large_vhol3u.jpg',
        'v1705205200/raleigh/2023-12/RLC_2545_Large_vka9sa.jpg',
        'v1705205200/raleigh/2023-12/RLC_2624_Large_wlrinh.jpg',
        'v1705205199/raleigh/2023-12/RCP_0419_Large_o5htr6.jpg',
        'v1705205199/raleigh/2023-12/RLC_2595_Large_eqrpes.jpg',
        'v1705205199/raleigh/2023-12/RLC_2395_Large_bzdain.jpg',
        'v1705205198/raleigh/2023-12/RLC_2471_Large_hhlbel.jpg'
      ]
    }
  },
  {
    slug: 'jonathan-butler',
    title: 'Jonathan Butler',
    image: 'cover_jonathan_butler.jpg',
    date: '2023-11-16',
    highlight: '-H9wWuI0-38',
    bio: '',
    social: {
      twitter: 'https://twitter.com/jbutlerguitar',
      instagram: 'https://www.instagram.com/jonathankennethbutler/?hl=en'
    }
  },
  {
    slug: 'norman-brown',
    title: 'Norman Brown',
    image: 'cover_norman_brown.png',
    date: '2023-10-18',
    highlight: 'cyltpaGwFhM?si=Lv5tCNV6c0S-6Poz',
    bio: '',
    social: {
      twitter: 'https://twitter.com/norman_brown',
      instagram: 'https://www.instagram.com/normanticmusic/'
    }
  }

]

export type Episode = typeof dataset[1]

export const useMediaStore = defineStore('media', () => {

  const currentYM = useDateFormat(useNow(), 'YYYYMM')
  const resolveImageUrl = (segment: string) => `https://res.cloudinary.com/dm7x6mos2/image/upload/${segment}`
  const now = new Date()

  const resolveEpisode = (ep: typeof dataset[number]) => {

    const eq = (a: string | number, b: string | number) => a === b ? 0 : a > b ? 1 : -1
    const date = new Date(ep.date)
    const epYM = useDateFormat(date, 'YYYYMM')
    console.log(date, now, now.getMonth())
    const epMonth = new Date(ep.date).getMonth() + 1
    return {
      epYM, currentYM,
      ym: eq(epYM.value, currentYM.value),
      current: (+date > +now),
      n: now,
      d: date.valueOf(),
      month: epMonth,
      dateeq: eq(date, +now),
      isCurrentMonth: eq(now.getMonth() + 1, epMonth),
      ...ep
    }



  }

  const episodes = dataset.map(resolveEpisode)

  const upcoming = episodes.filter(ep => ep.ym > 0)[0]
  const current = episodes.filter(ep => ep.ym === 0)[0] ?? {}
  const past = episodes.filter(ep => ep.ym < 0)

  return { episodes, resolveImageUrl, upcoming, current, past }
})
