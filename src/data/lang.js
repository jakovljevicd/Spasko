import { reactive } from 'vue'

export const lang = reactive({
  value: 0,
  switch(){
    this.value = this.value ? 0 : 1;
  }
})