<template>
  <main>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',

  head() {
    return {
      title: 'Yield.Fi | Crypto Transactions Made Easy',
      meta: [
        {
          hid: 'homepage',
          name: 'description',
          content:
            'Yield Finance is an award winning crypto startup with a mission to onboard local retailers into Decentralised Finance',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: '';
}
</style>
