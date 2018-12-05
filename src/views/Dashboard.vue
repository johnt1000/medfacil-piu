<template>
  <div>
    <IconeMedicamento></IconeMedicamento>
    <GridIcons></GridIcons>
    <GridIcons></GridIcons>
    <GridIcons></GridIcons>
  </div>
</template>

<script>
import GridIcons from '@/components/dashboard/GridIcons.vue'
import IconeMedicamento from '@/components/dashboard/IconeMedicamento.vue'
import EventBus from '@/event-bus'

export default {
  name: 'dashboard',
  components: {
    GridIcons,
    IconeMedicamento
  },
  created() {
    EventBus.$emit('connected', true)
  }
}
</script>

<style>

</style>
