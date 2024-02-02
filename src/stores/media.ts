const dataset = [
  {
    slug: 'alex-bugnon',
    title: 'Alex Bugnon',
    image: 'cover_alex_bugnon.jpeg',
    date: '2024-1-17',
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
      instagram: 'https://www.instagram.com/kirkwhalum/?hl=en'
    },
    members: [
      {
        name: 'Kirk Whalum',
        instrument: 'Saxaphone',
        social: { twitter: 'https://twitter.com/KirkWhalum', instagram: 'https://www.instagram.com/kirkwhalum/?hl=en' },
        avatar: 'https://res.cloudinary.com/dm7x6mos2/image/upload/w_500,ar_1:1,c_fill,g_face/v1705205198/raleigh/2023-12/RLC_2320_Large_iej8cl.jpg',
        primary: true
      },
      {
        name: 'Norman Brown',
        instrument: 'Guitar',
        social: { twitter: 'https://twitter.com/norman_brown', instagram: 'https://www.instagram.com/normanticmusic/' },
        avatar: 'https://res.cloudinary.com/dm7x6mos2/image/upload/w_500,ar_1:1,c_fill,g_face/v1705205199/raleigh/2023-12/RLC_2595_Large_eqrpes.jpg',
        primary: false
      },
      {
        name: 'Alex Bugnon',
        instrument: 'Piano',
        social: { twitter: 'https://twitter.com/alexbugnon', instagram: 'https://www.instagram.com/alexbugnon/?hl=en' },
        avatar: '',
        primary: false
      },
      {
        name: 'Raleigh Harrell',
        instrument: 'Bass',
        social: { twitter: '', instagram: '' },
        avatar: '',
        primary: false
      },
      {
        name: 'Marcus Finnie',
        instrument: 'Drums',
        social: { twitter: 'https://twitter.com/MarcusFinnie', instagram: 'https://www.instagram.com/stixfinnie/' },
        avatar: '',
        primary: false
      },
    ],
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


  const resolveImageUrl = (segment: string) => `https://res.cloudinary.com/dm7x6mos2/image/upload/${segment}`
  const now = +new Date()
  const resolveEpisode = (ep: typeof dataset[number]) => {

    const date = +new Date(ep.date)
    console.log(date, now)

    return {
      current: (date < now) && ep.title,
      n: now,
      d: date.valueOf(),
      ...ep
    }

  }

  const episodes = dataset.map(resolveEpisode)

  return { episodes, resolveImageUrl }
})
