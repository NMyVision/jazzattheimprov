
const dataset = [
  {
    slug: 'alex-bugnon', title: 'Alex Bugnon', image: 'cover_alex_bugnon.jpeg', date: '2024-1-17'
  },
  {
    slug: 'kurt-whalum',
    title: 'Kurt Whalum', image: 'cover_kurt_whalum.png', date: '2023-12-20',
    members: [
      {
        name: 'Kurt Whalum',
        instrument: 'Saxaphone',
        social: { twitter: '', instagram: '' },
        avatar: 'https://res.cloudinary.com/dm7x6mos2/image/upload/w_500,ar_1:1,c_fill,g_face/v1705205198/raleigh/2023-12/RLC_2320_Large_iej8cl.jpg',
        primary: true
      },
      {
        name: 'Norman Brown',
        instrument: 'Guitar',
        social: { twitter: '', instagram: '' },
        avatar: 'https://res.cloudinary.com/dm7x6mos2/image/upload/w_500,ar_1:1,c_fill,g_face/v1705205199/raleigh/2023-12/RLC_2595_Large_eqrpes.jpg',
        primary: false
      },
      {
        name: 'Alex Bugnon',
        instrument: 'Piano',
        social: { twitter: '', instagram: '' },
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
        social: { twitter: '', instagram: '' },
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
    slug: 'norman-brown',
    title: 'Norman Brown', image: 'cover_norman_brown.png', date: '2023-10-18'
  },

]

export type Episode = typeof dataset[1]

export const useMediaStore = defineStore('media', () => {


  const resolveImageUrl = (segment: string) => `https://res.cloudinary.com/dm7x6mos2/image/upload/${segment}`
  const now = new Date()
  const resolveEpisode = (ep: typeof dataset[number]) => {

    const date = new Date(ep.date)
    console.log(date, now)

    return {
      current: (date < now) && ep.title,
      ...ep
    }

  }

  const episodes = dataset.map(resolveEpisode)

  return { episodes, resolveImageUrl }
})
