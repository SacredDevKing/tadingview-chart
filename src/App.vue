<template>
  <TVChartContainer :symbol="'Bitfinex:BTC/USD'" :interval="'1D'"></TVChartContainer>
</template>

<script>
  import TVChartContainer from './components/TVChartContainer.vue'
  export default {
    name: 'app',
    components: {
      TVChartContainer
    }
  }
</script>