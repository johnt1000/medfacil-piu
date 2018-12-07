<template>
  <div>
    <icone-troca />
    <icone-medicamento />
    <icone-medico />
    <icone-alarme />
    <icone-avaliacao />
    <icone-emergencia />
  </div>
</template>

<script>
import IconeMedicamento from '@/components/dashboard/IconeMedicamento.vue'
import IconeTroca from '@/components/dashboard/IconeTroca.vue'
import IconeMedico from '@/components/dashboard/IconeMedicoClinica.vue'
import IconeAlarme from '@/components/dashboard/IconeAlarme.vue'
import IconeAvaliacao from '@/components/dashboard/IconeAvaliacao.vue'
import IconeEmergencia from '@/components/dashboard/IconeEmergencia.vue'
import EventBus from '@/event-bus'

export default {
  name: 'dashboard',
  components: {
    IconeMedicamento,
    IconeTroca,
    IconeMedico,
    IconeAlarme,
    IconeAvaliacao,
    IconeEmergencia
  },
  created() {
    EventBus.$emit('connected', true)
  }
}
</script>

<style>

</style>
