<script setup>
import settings from '@/global'
const tiers = [
  {
    name: 'Individual Membership',
    id: 'tier-basic',
    price: '$99',
    href: settings.INDIVIDUAL_MEMBERSHIP,
    description: 'Jazz Society Individual Membership',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time']
  },
  {
    name: 'Couples (2 Person) Membership',
    id: 'tier-essential',
    price: '$189',
    href: settings.COUPLE_MEMBERSHIP,
    description: 'Jazz Society Couples (2 Person) Membership',
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time', 'Marketing automations']
  },
  {
    name: 'Table (8 Person) Membership',
    id: 'tier-growth',
    price: '$699',
    href: settings.GROUP_MEMBERSHIP,
    description: 'Jazz Society Table (8 Person) Membership',
    features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '1-hour, dedicated support response time', 'Marketing automations', 'Custom reporting tools']
  }
]
</script>

<template>
  <div class="my-10 flow-root">
    <div class="isolate grid max-w-sm grid-cols-1 grid-rows-[auto,1fr,auto]  divide-y divide-gray-500 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
      <div v-for="tier in tiers" :key="tier.id" class="row-span-3 gap-y-6 grid grid-rows-subgrid pt-16 text-gray-200 lg:px-8 lg:pt-0 xl:px-14">
        <div>
          <h3 :id="tier.id" class="text-lg font-semibold leading-7 text-purple-600">{{ tier.name }}</h3>
        </div>
        <p class="flex items-baseline gap-x-1">
          <span class="text-5xl font-bold tracking-tight">{{ tier.price }}</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
        </p>
        <div>
          <a :href="tier.href" target="_blank" :aria-describedby="tier.id" class="block rounded-md border-2 border-purple-900 px-3 py-2 text-center text-sm font-semibold leading-6 text-purple-100 ring ring-purple-800/5 hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Buy plan</a>
        </div>
      </div>
    </div>
  </div>
</template>
