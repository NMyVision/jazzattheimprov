<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl sm:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Choose the right plan for&nbsp;you</p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
    <Subscriptions />
  </div>
</template>

<script setup>
import { Subscriptions } from '@/views/partials/Subscriptions.vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Individual',
    id: 'tier-basic',
    href: '#',
    price: { monthly: '$15', annually: '$12' },
    link: 'https://buy.stripe.com/test_3cscQee9b1kc0Jq144',
    description: 'the Jaz Society Individual Membership.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time']
  },
  {
    name: 'Couples',
    id: 'tier-essential',
    href: '#',
    price: { monthly: '$30', annually: '$24' },
    link: 'https://buy.stripe.com/test_3cscQee9b1kc0Jq144',
    description: 'the Jaz Society Couples (2 Person) Membership.',
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time', 'Marketing automations']
  },
  {
    name: 'Group',
    id: 'tier-growth',
    href: '#',
    price: { monthly: '$60', annually: '$48' },
    link: 'https://buy.stripe.com/test_3cscQee9b1kc0Jq144',
    description: 'the Jaz Society Table (8 Person) Membership.',
    features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', '1-hour, dedicated support response time', 'Marketing automations', 'Custom reporting tools']
  }
]
</script>
