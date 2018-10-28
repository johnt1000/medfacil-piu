<template>
    <GridIcons></GridIcons>
</template>

<script>
import GridIcons from '@/components/dashboard/GridIcons.vue'
import EventBus from '@/event-bus'

export default {
  name: 'login',
  components: {
    GridIcons
  },
  created() {
    EventBus.$emit('connected', true)
  }
}
</script>