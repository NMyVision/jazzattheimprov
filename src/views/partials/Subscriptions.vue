<template>
  <div class="my-20 flow-root">
    <div class="isolate grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-500 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
      <div v-for="tier in tiers" :key="tier.id" class="pt-16 text-gray-200 lg:px-8 lg:pt-0 xl:px-14">
        <h3 :id="tier.id" class="text-base font-semibold leading-7">{{ tier.name }}</h3>
        <p class="mt-6 flex items-baseline gap-x-1">
          <span class="text-5xl font-bold tracking-tight">{{ tier.price.monthly }}</span>
          <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
        </p>
        <a :href="tier.href" target="_blank" :aria-describedby="tier.id" class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
        <!--
          <p class="mt-10 text-sm font-semibold leading-6 ">{{ tier.description }}</p>

          <ul role="list" class="mt-6 space-y-3 text-sm leading-6 text-gray-600">
            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
              <CheckCircleIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const tiers = [
  {
    name: 'Jazz Society Individual Membership.',
    id: 'tier-basic',
    price: { monthly: '$99', annually: '$12' },
    href: 'https://buy.stripe.com/test_bIY03s3uxaUM2RyaEG',
    description: 'Jazz Society Individual Membership.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time']
  },
  {
    name: 'Jazz Society Couples (2 Person) Membership.',
    id: 'tier-essential',
    price: { monthly: '$189', annually: '$24' },
    href: 'https://buy.stripe.com/test_3cscQee9b1kc0Jq144',
    description: 'Jazz Society Couples (2 Person) Membership.',
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time', 'Marketing automations']
  },
  {
    name: 'Jazz Society Table (8 Person) Membership.',
    id: 'tier-growth',
    price: { monthly: '$699', annually: '$48' },
    href: 'https://buy.stripe.com/test_5kA9E28OR3skak0dQR',
    description: 'Jazz Society Table (8 Person) Membership.',
    features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '1-hour, dedicated support response time', 'Marketing automations', 'Custom reporting tools']
  }
]
</script>
